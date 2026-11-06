---
title: "What a Voice AI Minute Really Costs in 2026"
description: "Vendors quote $0.05 a minute. The real voice AI bill is $0.08 to $0.25 once you add STT, LLM, voice, telephony and concurrency. Here's the math."
date: "Nov 3, 2026"
slug: "what-voice-ai-minute-really-costs-2026"
keywords:
  - voice AI cost per minute
  - Vapi pricing
  - Retell AI pricing
  - AI voice agent pricing 2026
  - voice AI hidden costs
  - speech to text cost
  - text to speech cost
  - voice AI telephony cost
  - AI voice agent ROI
  - voice AI cost calculator
---

# What a Voice AI Minute Really Costs in 2026

*Prices checked against public vendor pages on 3 November 2026. They move often, so re-check before you budget.*

Ask for a voice AI quote and you will probably see a number like $0.05 a minute. It is a real number. It is also not the bill.

Vapi charges $0.05 a minute for hosting and passes speech-to-text, the LLM and text-to-speech through at provider cost. Retell quotes $0.07 to $0.31 depending on the models you pick. Bland bundles everything at $0.12 to $0.14. ElevenLabs Agents charge $0.08 a minute beyond your plan minutes, then add the LLM and your carrier.

Quoted rates in October 2026 ran from about $0.02 to $0.31 a minute. Same job, different stack, more than a 15x spread. Comparing those headlines tells you almost nothing about what you will pay.

Here is the version that does.

## Why the $0.05 minute is real and still incomplete

A voice call is not one product. It is five meters running at once:

| Meter | What it charges for | Typical public rate, Oct 2026 |
|---|---|---|
| **Telephony** | Connected call time | $0.0085 to $0.015 a minute on US numbers |
| **STT** | Audio transcribed | Deepgram Nova-3 around $0.0043 a minute; AssemblyAI Universal-3.6 Pro Realtime $0.45 an hour ($0.0075 a minute) |
| **LLM** | Input and output tokens | Cents per call on a small model, more on a frontier one |
| **TTS** | Characters or seconds of speech | Roughly $0.04 to $0.08 a minute for a good voice; ElevenLabs v3 at the top end |
| **Orchestration** | The platform gluing it together | Vapi $0.05, Retell $0.055 and up, or your own hosting |

Vapi's $0.05 covers the last row only. Their own calculator, run with Deepgram, OpenAI and ElevenLabs, estimates $82 to $129 a month for 1,000 minutes. That is $0.08 to $0.13 a minute. The platform fee is fixed; the models are not.

This is not a trick. Vapi is an orchestration layer, and orchestration is what they charge for. The problem is that a quote for the orchestration layer gets repeated in board decks as the cost of a call.

## One five-minute call, priced three ways

Assume a normal support call: about 45 seconds of caller speech, 30 seconds of agent speech per turn, four turns, 600 input and 300 output tokens per turn, and a mid-tier voice.

| Stack | Per minute | Five-minute call | What is missing |
|---|---|---|---|
| **Self-assembled** (Twilio, Deepgram, GPT-4.1-mini, ElevenLabs Flash, Pipecat on a small VPS) | ~$0.084 | ~$0.42 | Your engineering time, monitoring, failover |
| **Vapi** ($0.05 hosting + providers at cost) | ~$0.08 to $0.13 | ~$0.40 to $0.65 | Carrier minutes in some setups, add-ons |
| **Retell** ($0.07 to $0.31) | $0.07 to $0.31 | $0.35 to $1.55 | Add-ons, concurrency beyond 20 lines |
| **Bland** ($0.12 to $0.14 all-in) | $0.12 to $0.14 | $0.60 to $0.70 | Build plan adds a $299 monthly fee |
| **ElevenLabs Agents** ($0.08 beyond plan minutes) | ~$0.10 to $0.16 with LLM and carrier | ~$0.50 to $0.80 | Plan fee, LLM usage, carrier |

The self-assembled row looks cheapest, and on a pure per-minute basis it often is. It also assumes you already have someone who can run a real-time media pipeline, watch it at 2am, and debug a codec issue on a Friday. That person is not free.

At low volume, the difference between these stacks is coffee money. At 50,000 minutes a month, two cents a minute is $12,000 a year. Both statements are true, which is why "which platform is cheapest" is the wrong first question.

## What actually moves your bill

**Talk time, not call count.** Telephony bills per connected minute. A caller who sits on hold, or an agent that repeats a long greeting, is billable silence. Shorten the greeting before you shop for a cheaper model.

**TTS is usually the biggest line.** Voice is priced by characters or seconds, and the agent does most of the talking in a scripted flow. Moving from a premium voice to a good mid-tier one often saves more than switching LLMs. Listen to both before you decide; a cheap voice that callers distrust is not cheap.

**LLM choice compounds.** Token costs look trivial per call. They stop looking trivial when you paste a 4,000-token system prompt and the full conversation history into every turn. Trim the prompt, summarise the history, and put the small model on the simple intents.

**Turn count.** Every turn is another LLM call and another chunk of TTS. An agent that asks three clarifying questions where one would do is paying for the privilege.

**Concurrency and numbers.** Retell charges around $8 per concurrency slot and $10 per verified number each month. Vapi includes four concurrent calls on pay-as-you-go and ten on its $29 Core plan. If your peak is 30 simultaneous calls, that line item matters more than the per-minute rate.

**Retention and compliance.** Vapi's pay-as-you-go plan keeps call history for 14 days. HIPAA zero-data-retention is a $1,000 a month add-on. If you need long transcripts for QA or sector rules, budget for it.

**Failed calls.** A call that drops after 40 seconds still costs money, and it costs you the customer. Measure failure rate alongside cost per minute, or you will optimise the wrong number.

## The number that matters: cost per outcome

A $0.12 minute sounds expensive next to a $0.08 minute until you attach it to an outcome.

If a voice agent books one $4,000 event rental from a call that would otherwise have gone to voicemail, the per-minute price is noise. If it resolves 60% of support calls without a human, compare the cost per resolved call with your loaded hourly cost. That is the only comparison a finance team will accept.

The trap is measuring cost per minute and never measuring minutes per outcome. A cheaper stack that mishears postcodes and transfers 40% of calls is more expensive than the premium one that resolves them.

Three numbers to track from week one:

- **Cost per connected minute**, all five meters included.
- **Containment rate**, the share of calls resolved without a transfer.
- **Cost per booking, ticket or resolved call**, your actual unit economics.

## Where the quote and the invoice drift apart

A few patterns show up again and again when teams move from pilot to production.

**The pilot used web calls.** Web calls skip carrier fees. Production runs on phone numbers, and the bill jumps. Price the real channel before you sign.

**The pilot used short prompts.** Production prompts grow as you add policies, FAQs and tool definitions. Token costs grow with them, and so does latency. Review both monthly.

**The pilot had ten minutes of traffic a day.** At scale, concurrency limits bite. You either buy more slots or callers hear a busy tone, which is worse than a slightly higher per-minute rate.

**Nobody owned the model choice.** The default voice and default LLM stay in place for a year because changing them feels risky. A quarterly review of voice, model and prompt length is usually worth more than renegotiating the platform fee.

## Questions to ask before you compare platforms

- What exactly does the per-minute rate include: STT, LLM, TTS, telephony, or only orchestration?
- What does a five-minute call cost on my actual script, with my actual voice and model?
- How is concurrency billed, and what happens at my peak hour?
- How long are transcripts retained, and what does longer retention cost?
- What are the add-ons for HIPAA, SSO, data residency and support?
- Can I bring my own provider keys, and do I still pay a platform fee if I do?
- What is the failure and transfer rate on calls like mine, and who monitors it?

Get the answers in writing, then price the same call on two finalists. A spreadsheet with five rows beats a sales deck with one number.

## How we approach it at Acumo AI

We build voice agents for booking, qualification and customer support, and the cost conversation starts with the call flow, not the vendor. Which intents need a frontier model, which can run on a small one, where a scripted response beats a generated one, and which calls should go to a human in the first ten seconds.

That work usually saves more than switching platforms. It also makes the bill predictable, because you know which meter each decision moves. If you want to see how we build the rest of the stack, read about [voice AI and CRM integration](/services/voice-ai-crm), or [book a 30-minute call](https://calendly.com/teamacumo/30min) with a real call recording and your current bill. We will price it line by line.

## FAQ

### How much does a voice AI agent cost per minute in 2026?

Most production voice agents land between $0.08 and $0.25 a minute once you include telephony, speech-to-text, the LLM, text-to-speech and orchestration. Published platform rates range from about $0.02 to $0.31 a minute, but those numbers cover different parts of the stack, so they are not directly comparable.

### Is Vapi's $0.05 per minute the full cost?

No. Vapi charges $0.05 a minute for hosting and passes STT, LLM and TTS through at provider cost, with telephony billed separately. Vapi's own calculator puts a typical 1,000-minute month at $82 to $129, or roughly $0.08 to $0.13 a minute.

### What is the cheapest way to run a voice AI agent?

Assembling the stack yourself is usually cheapest per minute, around $0.08 to $0.09 for mid-tier components. It also requires engineering time to build, monitor and maintain a real-time pipeline. Managed platforms cost more per minute but remove that operational work, which is often the better trade for a small team.

### Why do voice AI quotes vary so much?

Because they cover different things. One quote may be orchestration only, another may bundle models, and another may include telephony and a monthly plan fee. Voice choice, LLM choice, call length and concurrency also move the number. Compare the same five-minute call on the same script, not the headline rate.

### How do I reduce voice AI costs without hurting quality?

Start with the call flow: shorter greetings, fewer clarifying turns, tighter prompts and trimmed conversation history. Then review the voice and LLM choices per intent, so simple requests use cheaper models. Buy concurrency for your real peak, and track cost per resolved call rather than cost per minute.

## Sources and notes

- AssemblyAI, "AI voice agent pricing in 2026: per-minute platforms vs stacked per-layer costs" (prices checked 20 October 2026): [assemblyai.com](https://www.assemblyai.com/blog/ai-voice-agent-pricing)
- Cartesia, "AI voice agent platforms compared (2026)" (3 October 2026): [cartesia.ai](https://www.cartesia.ai/learn/ai-voice-agent-platforms)
- Vapi public pricing page: [vapi.ai/pricing](https://www.vapi.ai/pricing)
- VoiceStack, "AI Voice Agent Pricing Compared" (updated 19 October 2026): [voiceagentprices.com](https://voiceagentprices.com/)
- TextToLab, "Voice Agent Pricing 2026" (updated 23 October 2026): [texttolab.com](https://texttolab.com/blog/voice-agent-pricing)
- SuperDupr, "Voice AI Pricing in 2026" (updated 26 October 2026): [superdupr.com](https://superdupr.com/blog/voice-ai-pricing)

*Component prices and platform fees were read from public pages on 3 November 2026 and may have changed. Worked examples use the assumptions stated above and are illustrative, not quotes. Acumo AI is not affiliated with the vendors named.*
