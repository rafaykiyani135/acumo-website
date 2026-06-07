import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

export interface ArticleMetadata {
  title: string;
  slug: string;
  folderName: string;
  date: string;
  readTime: string;
  imagePath: string;
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), 'Article Content');

export function getArticles(): ArticleMetadata[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const folders = fs.readdirSync(ARTICLES_DIR);
  const articles: ArticleMetadata[] = [];

  for (const folder of folders) {
    const folderPath = path.join(ARTICLES_DIR, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const files = fs.readdirSync(folderPath);
    const mdFile = files.find(f => f.endsWith('.md'));

    if (mdFile) {
      const mdPath = path.join(folderPath, mdFile);
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      
      // Parse with gray-matter (in case frontmatter is added later)
      const { data, content } = matter(fileContents);
      
      // Extract title from first heading if not in frontmatter
      let title = data.title;
      if (!title) {
        const titleMatch = content.match(/^#\s+(.+)$/m);
        title = titleMatch ? titleMatch[1] : folder;
      }
      
      // Generate slug from title
      const titleForSlug = title.replace(/\s*\(.*?\)\s*/g, '');
      const slug = slugify(titleForSlug, { lower: true, strict: true });
      
      // Calculate read time
      const wordCount = content.trim().split(/\s+/).length;
      const readTimeMinutes = Math.ceil(wordCount / 200);
      const readTime = `${readTimeMinutes} min read`;
      
      // Date from file stats or frontmatter
      const date = data.date || fs.statSync(mdPath).mtime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      articles.push({
        title,
        slug,
        folderName: folder,
        date,
        readTime,
        imagePath: data.image || '',
        content
      });
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): ArticleMetadata | undefined {
  const articles = getArticles();
  return articles.find(article => article.slug === slug);
}
