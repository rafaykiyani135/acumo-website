---
title: "How We Turned a Spreadsheet Into a Conversational AI Reporting System"
description: "A real-world look at how we used the OpenAI API to turn natural language into spreadsheet updates, generate charts from payment data, and automate monthly PDF reports."
date: "Aug 24, 2026"
slug: "ai-spreadsheet-automation-conversational-reporting-system"
keywords:
  - AI automation
  - conversational AI
  - spreadsheet automation
  - AI data analysis
  - business process automation
  - OpenAI API integration
  - automated reporting
  - AI-powered reporting
  - data visualization automation
  - workflow automation
  - how to connect AI to a spreadsheet
  - update a spreadsheet using natural language
  - AI automation for Google Sheets and Excel
  - build charts from spreadsheet data using AI
  - automated monthly PDF reports
  - use the OpenAI API for business automation
  - conversational interface for business data
  - gpt-5.1
---

# How We Turned a Spreadsheet Into a Conversational AI Reporting System

A friend of mine was tracking contractor milestone payments in a spreadsheet. Every time he made a payment, he had to open the sheet, find the correct milestone, enter the amount, and make sure the numbers stayed accurate. It was not an especially complicated process, but it was another small administrative task that had to be repeated every time money changed hands.

He wanted a way to record those payments through conversation. Instead of opening the spreadsheet whenever something changed, he wanted to describe the payment naturally and let the system identify the relevant milestone and update the correct record automatically.

The original request was to connect a conversational interface with his payment tracking spreadsheet so that he would not have to enter every payment manually. I built the system using the OpenAI API, but once the basic workflow was working, the project started growing into something more useful.

If the system could understand a payment instruction, why should it stop there? It could also understand requests for charts, retrieve the relevant numerical data, and generate visualizations. And if it already had access to the payment data, it could automatically prepare a monthly summary and breakdown without waiting for him to ask.

What began as a way to update a spreadsheet through conversation became a small system for recording, exploring, and reporting on payment data.

## The Real Problem Was Not the Spreadsheet

The spreadsheet itself was not the problem. It already contained the milestones and payment information he needed. The problem was the amount of manual interaction required to keep it up to date.

Traditional spreadsheets expect people to work in a very structured way. You open the correct file, find the right row, identify the correct column, enter the number, and save the change. That works well, but it also means the user has to understand the structure of the spreadsheet every time they want to record something.

A conversation works differently. A person can simply describe what happened. One person might write, “Add 2,750 to the next payment for milestone 8,” while another might say, “Record a contractor payment of 3,200 against milestone 14.” The wording is different, but both messages describe information that needs to be converted into a structured spreadsheet action.

To a person, these requests are straightforward. The challenge is that a spreadsheet cannot naturally understand them. Before any data can be updated, the system has to determine what the user is trying to do and extract the information required to perform that action.

That was the first technical problem the system needed to solve.

## Turning Natural Language Into a Spreadsheet Action

When someone sends a message about a payment, there are several pieces of information hidden inside a single sentence. The system may need to understand that this is a payment-related action, identify the relevant milestone, extract the amount, and recognize any other information required by the spreadsheet.

The same person might phrase the request differently tomorrow. They could write, “Log 1,800 against milestone 5,” or “The contractor has been paid 1,800 for phase 5.” The wording changes, but the underlying action may be the same.

This is where the gpt-5.1 API became useful in the system. Instead of writing separate rules for every possible way someone might describe a payment, the AI model could interpret the request and convert it into a structured instruction that the application could work with.

Conceptually, a message such as:

> “I just paid $3,850 for milestone 21. Add it to the tracker.”

could become something like:

```json
{
  "action": "record_payment",
  "milestone": 8,
  "amount": 2750,
  "currency": "USD"
}
```

The important idea here is that the AI is not being asked to decide how the spreadsheet should be edited at a cell level. Its role is to understand the user's language and return the information in a predictable structure.

This approach is similar to the idea behind structured outputs and function calling. The model can return information that follows a defined structure or request an application-defined action, while the application remains responsible for deciding what actually happens next. OpenAI documents function calling as a way to connect models to external tools and systems, including workflows where information is converted into structured data and passed to an application.

## The AI Understands the Request. The Application Controls the Data.

One of the most important decisions in this type of system is separating AI interpretation from business logic.

It would be tempting to give the AI unrestricted access to the spreadsheet and allow it to modify whatever it thinks should be changed. That would make the architecture much less predictable. A language model is useful for understanding flexible human requests, but the actual rules for updating financial data should remain under the control of the application.

In this system, the AI's job was to interpret the request. The application then handled the action.

If the AI returned a request to record a payment against milestone 8, the application could check whether that milestone actually existed. It could validate that the amount was a valid number, identify the correct spreadsheet row, and apply the update according to the rules defined in the system.

The flow looked more like this:

**User message → gpt-5.1 API → Structured action → Validation → Spreadsheet update**

This separation makes the system easier to reason about. The AI handles the part that is naturally difficult for traditional software, which is understanding different ways a person might express the same request. The application handles the deterministic parts, such as validating data and updating the correct record.

That distinction became even more important once the project started doing more than recording payments.

## Once You Can Talk to Your Data, You Can Ask It Questions

After the conversational payment updates were working, the next step was obvious. If my friend could tell the system about a payment, he should also be able to ask questions about the information already stored.

For example, he could ask the system to build a chart showing his payments over a specific period.

A request might look like:

> “Show me a chart of contractor payments between February and July.”

The AI's role was again to understand the language. It could identify that the user wanted a chart and extract the requested date range. However, the AI was not responsible for calculating the payment totals or inventing numbers for the chart.

The application retrieved the actual numerical data from the spreadsheet, filtered the data for the requested period, performed the required calculations, and generated the visualization from those results.

The workflow was conceptually:

**User request → AI understands intent and date range → Application retrieves data → Calculations are performed → Chart is generated**

This separation is important when building systems around financial or operational data. AI is very useful for making the interface more natural, but the actual figures should come from the system of record. The chart should be generated from real spreadsheet data, not from a model trying to describe what it thinks the numbers might be.

### From Data Entry to Data Visualization

This changed the role of the spreadsheet in a useful way.

Originally, the project was focused on reducing manual data entry. My friend could describe a payment in natural language, and the system could update the spreadsheet. Once chart generation was added, the same conversation became a way to explore the data as well.

Instead of manually filtering rows and selecting data ranges, he could ask for a breakdown of payments over a period. The system could retrieve the relevant information and generate a visualization from it.

Depending on the request, this could support monthly payment charts, milestone comparisons, or other numerical breakdowns based on the data already being tracked.

The spreadsheet remained the source of truth. What changed was the way the user interacted with it.

## The System Eventually Started Working Without Being Asked

The final part of the project moved beyond conversation altogether.

Up to that point, the system was reactive. My friend asked it to record a payment or build a chart, and the system performed the requested action.

But monthly reporting is a predictable task. At the end of every month, the same basic questions are likely to come up. How much was paid? Which milestones received payments? How did the month's payments compare with the rest of the project? What does the overall breakdown look like?

Instead of waiting for someone to request that information manually, the system could generate a report automatically.

At the end of each month, a scheduled process could retrieve the relevant payment data, calculate the monthly totals and breakdowns, generate any required charts, prepare a readable summary, and compile everything into a PDF statement.

The architecture for that process looked roughly like this:

**Scheduled trigger → Retrieve monthly data → Calculate statistics → Generate charts → Create summary → Generate PDF**

This was an important change because it turned the project from a conversational assistant into a proactive automation.

The user did not need to remember to prepare the report. The system already knew when the reporting period ended and could begin the process automatically.

## A Small System With Different Responsibilities

By the end of the project, several components were working together, each with a specific responsibility.

| Component | Responsibility |
| --- | --- |
| Conversational interface | Receives the user's request in natural language |
| gpt-5.1 API | Understands intent and extracts structured information |
| Application logic | Validates requests and decides which action to perform |
| Spreadsheet | Stores the payment and milestone data |
| Data processing layer | Retrieves and calculates numerical information |
| Chart generation | Creates visualizations from real data |
| Scheduler | Triggers recurring monthly automation |
| PDF generator | Produces the final monthly statement |

This separation was useful because not every part of the system needed AI.

The AI was used where flexibility was required. It interpreted conversational requests and helped turn them into structured actions. The application handled validation and business rules. The spreadsheet stored the actual data. Code handled numerical calculations and chart generation. The scheduler handled time-based automation.

That is an important design principle for AI automation in general. A language model does not need to be responsible for every step of a workflow just because it is involved in the system.

## Why This Architecture Matters Beyond One Spreadsheet

Although this project was built around contractor milestone payments, the underlying idea can apply to many business systems.

A company might already have a CRM, accounting platform, inventory system, project management tool, or database. The software may be perfectly capable of storing the information the business needs. The problem may be the amount of manual work required to interact with that software.

Employees often have to translate what happened in the real world into the structured format expected by a system. A customer sends an email, and someone updates the CRM. A project manager receives an update, and someone changes the project tracker. A payment is made, and someone opens a spreadsheet to record it.

AI can act as an interpretation layer between natural language and structured software.

A person can describe what happened in the way that feels natural to them. The AI can interpret the request and return structured information. The application can then validate that information and perform the appropriate action in the existing system.

The goal is not necessarily to replace the software the business already uses. In many cases, the better approach is to make that software easier to interact with.

## The Bigger Lesson: AI Can Become an Interface to Existing Systems

The most interesting part of this project was that my friend did not actually need a new payment management platform.

His spreadsheet was already useful.

What he wanted was a better way to use it.

Once the conversational interface was added, he no longer had to interact with the spreadsheet in exactly the same way for every task. He could describe a payment, request a visualization, or receive an automated report without manually performing each step himself.

The AI did not replace the spreadsheet. It became part of a new interface around it.

That idea has much broader applications. Businesses already invest heavily in software, databases, CRMs, and internal systems. Replacing all of those systems with AI would often be unnecessary and impractical.

A more useful question is whether AI can make the systems already in place easier to use.

Can someone update a CRM through a conversation? Can a manager ask for a report without manually exporting and filtering data? Can a recurring report be generated automatically at the end of every month? Can an employee describe what happened instead of navigating through several screens and forms?

Those are the kinds of questions that lead to practical AI automation.

## Start With the Repetitive Interaction

The project started with a very small frustration: manually updating a spreadsheet every time a payment was made.

That is often where good automation opportunities begin. A task may not look complicated, but if it happens repeatedly, the time and attention it consumes can become significant.

The useful approach is to look at how people interact with the systems they already use. If employees repeatedly enter the same kinds of information, search for the same data, prepare the same reports, or move information between tools, there may be an opportunity to reduce that work.

The solution does not always need to be a large autonomous AI system. Sometimes it is a simple conversational interface. Sometimes it is a scheduled report. Sometimes it is an AI layer that understands a request and passes a structured action to an existing application.

In this case, one request to interact with a spreadsheet through conversation led to a system that could update payment records, create charts from real numerical data, and automatically generate monthly PDF statements.

The technology was more involved than the original request, but the goal stayed simple: remove unnecessary manual work and make the existing data easier to use.

That is how we approach AI automation at Acumo. We start with the process someone is already doing, identify where time is being lost, and look for practical ways to connect AI with the systems that already matter to the business.
