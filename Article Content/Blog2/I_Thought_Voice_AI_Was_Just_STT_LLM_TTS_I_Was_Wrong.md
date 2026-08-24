---
title: "I Thought Voice AI Was Just STT + LLM + TTS. I Was Wrong."
image: "/voice-blog1.png"
date: "Jul 21, 2026"
---

# I Thought Voice AI Was Just STT + LLM + TTS. I Was Wrong.

When I first started building Voice AI applications, I thought the
architecture was pretty straightforward.

Speech-to-Text (STT) converts the user's speech into text, an LLM
generates a response, and Text-to-Speech (TTS) speaks it back. Three
components. Wire them together and you've got yourself an AI voice
agent.

At least, that's what I assumed.

After spending time building voice agents for real businesses, I
realized that this stack is only the foundation. The difference between
a demo that works and a production voice assistant that people actually
enjoy talking to is much bigger than I expected.

Most of that difference has very little to do with the language model
itself.

## 1. Your Voice Model Can Make or Break the Experience

Initially, I assumed that any good-quality ElevenLabs voice would be
enough. If it sounded realistic in a short demo, it was probably good
enough for production.

That assumption didn't last long.

On real phone calls, users spend several minutes talking to the AI.
Small imperfections that you barely notice in a 20-second demo become
surprisingly obvious over time. A voice might sound great initially but
start feeling repetitive, overly energetic, or just... synthetic.

Things like tone stability, pacing, emphasis, and natural pauses ended
up mattering more than raw audio quality.

I've experimented with quite a few voices, and lately I've been using
**Jessica** because it's one of the few that consistently feels natural
throughout longer conversations.

## 2. Filler Words Aren't Bad Design

One mistake I made early on was removing filler words from responses.

I wanted the AI to sound clean, concise, and efficient.

Instead, it sounded robotic.

People naturally say things like:

-   "Hmm..."
-   "Let me check that."
-   "Right..."
-   "Give me a second."

These tiny conversational habits make speech feel human. Without them,
every response feels overly rehearsed, even when the answer itself is
perfectly correct.

The goal isn't to add filler everywhere---too much becomes
annoying---but using them naturally makes conversations feel far less
mechanical.

## 3. Bigger Prompts Don't Make Better Voice Agents

This one surprised me.

As developers, it's tempting to keep expanding the system prompt with
more instructions, edge cases, formatting rules, and examples.

In chat applications, that usually isn't a huge issue.

Voice AI is different.

Every extra token adds processing time, and even small delays become
noticeable during a live conversation.

After simplifying several of my system prompts, I consistently saw
response latency improve by roughly **100--200 milliseconds**,
particularly with faster models like **Claude Haiku 4.5** and
**GPT-4.1**.

Did the AI suddenly become smarter?

Not really.

Did the conversation feel noticeably faster?

Absolutely.

In voice interfaces, users don't judge latency in seconds---they feel it
almost immediately.

## 4. Turn Detection Is One of the Most Important Settings Nobody Talks About

If I had to point to one setting that changes how "human" a conversation
feels, it would probably be turn detection.

Get it wrong, and everything feels awkward.

If the AI responds too aggressively, it interrupts users before they've
finished speaking.

If it's too conservative, users end up talking over the assistant or
waiting through uncomfortable silence before anything happens.

Finding that balance takes more experimentation than I expected, but
it's one of the biggest contributors to a natural conversation.

It's not the kind of thing that shows up in product demos, yet it has a
massive impact on real-world usability.

## Voice AI Is More About Conversation Design Than AI Models

One of the biggest lessons I've learned is that building Voice AI isn't
just about choosing the best LLM or the highest-quality speech model.

It's about designing an entire conversation system.

Voice selection, response timing, interruption handling, latency,
pacing, filler words, and dozens of tiny UX decisions all combine to
shape how people perceive the assistant.

Ironically, the language model often isn't the hardest part.

The details around it are.

If you're building Voice AI, don't spend all your time comparing models.
Spend time tuning the conversation itself.

That's usually where the biggest improvements come from.
