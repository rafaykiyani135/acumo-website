---
title: "Google Killed Opal. If Your Business Runs on a Platform You Don't Own, You're Next"
description: "Google turned Opal off on 17 November 2026 with no migration path. Your workflows stop running, your files stay in Drive but can't run. Prompt-only platforms die with the platform. Code you own doesn't."
slug: "google-opal-shutdown-code-ownership"
date: "Nov 18, 2026"
keywords:
  - google opal shutdown
  - opal shutdown November 2026
  - google opal alternative
  - vibe coding platform risk
  - code ownership
  - export code from Lovable
  - no-code platform shutdown
  - AI workflow migration
---

# Google Killed Opal. If Your Business Runs on a Platform You Don't Own, You're Next

Google turned Opal off on 17 November 2026, and there is no migration path. Your workflows stop running, your files stay in Google Drive but cannot run on their own, and the lesson is blunt. Prompt-only tools die with the platform. Code you own does not.

Opal was Google's no-code builder for AI mini-apps, where you described what you wanted in plain English and Opal chained prompts, models and tools into a shareable workflow. It launched in July 2025, expanded to 160 countries, and then Google announced on 30 September 2026 that it would turn off. One day later, it did.

## Why is Google shutting Opal down?

Google calls it a graduation, and the wording matters, because Opal began as a Google Labs experiment to learn how people build custom AI workflows, and Google says everything it learned directly shaped Skills in Gemini, the feature for saving and reusing custom instructions inside chat. With that capability moving into its core products, the standalone experiment had no reason to live on.

That is the official reason, and it is mostly true. The rest of the story is that Opal never became a production tool. An Opal app had no scheduled runs, no webhooks, and no inbound triggers. It only started when somebody opened the link and pressed start, which rules out anything a business actually depends on, like a scheduled report, an inbound lead router, or an appointment reminder. It was free, with no pricing tier and no business model behind it.

Google Labs kills experiments all the time. This one just happened in public, with users' workflows inside it.

## What happens to Opal workflows after 17 Nov?

They stop running. Google's FAQ is direct about it: workflows will no longer run interactively after 17 November 2026, and existing workflows will not automatically migrate, so you need to set up any new skills or prompts manually.

Your files are not deleted. They stay in Google Drive under My Drive, then Opal, and Google says it will not delete or touch them. You can download a file and open it in a plain text editor to recover the prompt text. That recovers the instructions, but it does not recover a running app.

Regular Gemini Gems follow a different path, since on adult personal accounts eligible Gems transition automatically to Skills on 17 November, then become read-only before their scheduled removal on 17 December, while Workspace accounts follow a separate timetable in 2027. The open-source Breadboard and Opal ADK repositories go into read-only archived mode, though they stay public, so anyone can still view, clone, or fork the code, while the hosted endpoints turn off with opal.google.com.

Google points users in two directions: Skills in Gemini is for everyday tasks and reusable instructions in chat, while Google AI Studio is for deeper prototyping. Neither recreates an Opal app automatically, and some workflows will need additional development to work again.

## Is this the end of vibe coding?

No, and anyone telling you that is selling you something. Opal was not really a vibe coding platform, since it only chained prompts into mini-apps, while Lovable, Bolt, v0, Replit and Base44 generate real codebases, with front ends, back ends, databases and auth, which puts them in a different category with a different fate.

Google is not leaving this space either, since Firebase Studio is Google's actual vibe-code play, and AI Studio and Stitch are still alive. What Google did was consolidate: it took the reusable-instructions idea out of a side experiment and put it inside Gemini, where hundreds of millions of people already are. That is how big platforms behave. They absorb the experiment and kill the wrapper.

The squeeze is real for prompt-only wrappers, though, because if a tool's entire value is a friendly prompt box on top of someone else's model, the model owner can ship the same thing inside their own product and the wrapper has nothing left. Code-generating platforms have a stronger moat, because the output is a codebase you can take with you.

## What is the difference between Opal and Lovable, Bolt, v0 and Replit?

Ownership. That is the whole difference, and it is the only one that matters when a platform shuts down.

Opal produced no exportable codebase, so your app lived on Google's service, ran on Google's service, and died with Google's service. The prompt text survived in Drive. The app did not.

Lovable, Bolt and v0 produce a codebase you can export, put in your own GitHub repository, host yourself, and hand to a developer to keep building. Replit goes further and gives you a full environment with a database and deployments. If any of those companies shut down tomorrow, your app would still exist as code. You would need a new host, not a rebuild from scratch.

So the test before you build anything on an AI platform is one question. Can I take my code and leave? If the answer is yes, platform risk is a manageable problem. If the answer is no, you are renting your own product.

## What should you ask before building on any AI platform?

Ask these five questions before you build, not after the shutdown notice arrives.

Can I export the full codebase, including the database schema and configuration, in one click? A platform that makes export hard is telling you its business model depends on you staying. Can I self-host the app somewhere else without rewriting it? If the app only runs on the vendor's infrastructure, your uptime is their decision. What happens to my data if the vendor shuts down, gets acquired, or triples its price? Look for a written answer, not a sales call promise. The intellectual property in what you build should belong to you, in writing. And is there a migration path, or at least an export format, documented before you need it?

Two of those answers decide almost everything, since exportable code and portable data turn a shutdown into an inconvenience, while without them a shutdown is a rebuild.

That is also why the cheapest platform is rarely the cheapest decision. A free experiment costs nothing until the day it disappears, and then it costs whatever your rebuild costs. A platform with a real pricing tier, a real export button, and a real company behind it is not a luxury. It is insurance.

## What to do if your workflow is stranded on Opal

If you built something on Opal that your business still needs, start with recovery, then rebuild in the right place.

First, go to your Drive and open the Opal folder under My Drive. Download each workflow file and open it in a plain text editor. Copy out the prompts, the input definitions, and the step order. That is the logic of your app, and it is the only part Google preserved. Do this before you forget which workflow did what, because the files will not remind you.

Second, sort your workflows into two piles: the simple ones, a reusable instruction or a small helper you run by hand, can become a Skill in Gemini. Type a slash and the skill name in chat to run it. The ones that do real work on a schedule, take input from outside Google, or touch a customer, do not belong in a chat skill, and they need to be rebuilt as a proper app.

Third, rebuild the second pile properly, with code you own. Google AI Studio works for prototyping the replacement, while anything that runs a business process should be built as a real application with a database, auth, and hosting you control, and tested before you depend on it. The businesses hurt worst by the Opal shutdown are not the ones who lost an experiment. They are the ones who let an experiment become infrastructure.

## FAQ

### Is Google Opal really gone?

Yes. Google turned off the Opal service and Gems made by Labs on 17 November 2026. The service no longer runs workflows, and Google announced the shutdown on 30 September 2026, giving users about seven weeks to copy out their prompts.

### Can I still get my Opal workflows back?

You can get the prompt text back, not the running app. Your workflow files stay in Google Drive under My Drive, then Opal. Download a file, open it in a plain text editor, and copy the prompts and step order out of it. The app itself will not run again, because the service that ran it is gone.

### Will Gemini Skills replace Opal?

Only for the simplest workflows, since a Skill in Gemini saves a reusable instruction you can run inside a chat, which covers everyday tasks and personal helpers. It cannot replace scheduled work, inbound triggers, or anything that needs to run outside Google's chat. Skills cannot reach the internet from scripts, and video, music, Canvas and Deep Research do not work with them yet.

### Is Lovable going to shut down too?

There is no sign of that, and the comparison misses the point. Lovable, Bolt, v0 and Replit produce exportable code, while Opal produced prompt chains that only ran on Google's service. The risk to watch is not which company is biggest. It is whether you can export your full codebase and host it somewhere else if the vendor disappears.

### What is the safest way to build with AI tools?

Build with tools that let you own the output, using a platform that exports the full codebase, keeping it in your own GitHub repository from day one, and hosting it somewhere you control. Treat any no-code or prompt-only tool as a prototype, not as production infrastructure, until you have a copy of the code outside it.

### Should small businesses stop using no-code AI tools?

No. They are good for testing an idea fast and cheap. The mistake is letting a prototype become the system your business depends on without ever getting the code out. Prototype on whatever is fastest, then rebuild the ones that work as real software with a database, auth, and hosting you own.

### What does the Opal shutdown mean for vibe-coded apps?

It draws a line between two kinds of AI-built software. Prompt-only apps die with their platform, because there is nothing to take with you. Vibe-coded apps with exportable code survive, because the code is the app. If you built a business tool with Lovable or Bolt, export the code now and put it in your own repository, before you ever need to.

## Sources

- Google, "Frequently asked questions and best practices | Opal", [developers.google.com/opal/faq](https://developers.google.com/opal/faq)
- TechRepublic, "Google Opal Shuts Down Nov. 17: Your AI Apps Won't Transfer Automatically", [techrepublic.com](https://www.techrepublic.com/article/news-google-opal-shutdown-ai-workflows/)

If your workflow is stranded on Opal, the rebuild is the decision that matters. Acumo AI builds [custom AI automations](https://www.acumoai.com/services/ai-automation) and [production-ready MVPs](https://www.acumoai.com/services/mvp-development) with code you own, in your own repository, on hosting you control. A stranded Opal workflow is a good starting point: the prompts are already written, and the logic is already proven. [Book a free 30-minute scoping call](https://calendly.com/teamacumo/30min) and we will tell you what it takes to rebuild it as a real app, or whether a Gemini Skill will do.

That is the same lesson as our earlier article on [voice AI vendor lock-in](https://www.acumoai.com/articles/voice-ai-for-sales-coaches). The platform is not the product, since your code, your data, and your customer relationships are what actually matter.
