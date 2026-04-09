# FTUE v0 Blueprint

## Purpose

This document translates the FTUE context into an implementation-ready product blueprint.

It defines:

- The final step-by-step learner journey
- Exact questions and input types
- Mandatory vs conditional logic
- Tech vs non-tech branching
- Personalized letter inputs and structure
- Suggested launch metrics for v0

## Experience Principles

- The FTUE remains mandatory before dashboard access in v0.
- No current fields are removed.
- New questions should be lightweight and mostly use selects, chips, and multi-selects.
- The journey should feel premium, guided, and personalized rather than administrative.
- The completion moment should feel like the beginning of the learner's transformation, not just form submission.
- Form screens should avoid heavy split-pane layouts unless the second pane is doing real work.
- Welcome and form-entry screens should feel visually light, with strong narrative copy and generous whitespace.

## End-to-End Journey

1. Welcome / Founder Message
2. Step 1: Profile Details
3. Step 2: Work & Education
4. Step 3: Programming Readiness
5. Step 4: AI Readiness
6. Step 5: Goal / Mission
7. Step 6: Motivation
8. Completion: Personalized Letter

## Screen 0: Welcome / Founder Message

### Objective

Create emotional buy-in and reinforce that the learner has entered a meaningful, high-commitment journey.

### UI intent

- Short welcome note
- Premium visual treatment
- Single `Continue` CTA

### Notes

- Keep this concise
- Avoid long paragraphs
- Use this screen to set tone, not collect data
- Prefer a strong hook line plus a short founder-style quote or note
- Avoid explainer-heavy layouts on this screen

## Step 1: Profile Details

### Objective

Collect mandatory personal and compliance-oriented learner details.

### Questions

1. `Title`
- Type: single select
- Required: yes
- Suggested options:
  - Mr.
  - Ms.
  - Mrs.
  - Prefer not to say

2. `Full name`
- Type: text input
- Required: yes

3. `Date of birth`
- Type: date input
- Required: yes

4. `Guardian / Secondary contact name`
- Type: text input
- Required: yes

5. `Relationship with guardian / secondary contact`
- Type: single select
- Required: yes
- Suggested options:
  - Parent
  - Sibling
  - Spouse
  - Relative
  - Friend
  - Mentor
  - Other

6. `Guardian / Secondary contact number`
- Type: phone input
- Required: yes

7. `Area pincode`
- Type: numeric input
- Required: yes

### Validation notes

- Prevent invalid dates
- Validate phone number format
- Validate pincode length as per business rules

## Step 2: Work & Education

### Objective

Capture learner background for segmentation, personalization, and internal operations.

### Questions

1. `LinkedIn profile`
- Type: text input
- Required: no in UI only if current logic allows, otherwise preserve existing required behavior

2. `Academic specialization`
- Type: single select
- Required: yes
- Notes: preserve current taxonomy if already defined in system

3. `Current job role`
- Type: single select or searchable dropdown
- Required: yes
- Notes: this field will also be used for tech vs non-tech classification

4. `Total years of experience`
- Type: single select
- Required: yes

5. `Total months of experience`
- Type: single select
- Required: yes

6. `Years of experience in tech`
- Type: single select
- Required: yes

7. `Months of experience in tech`
- Type: single select
- Required: yes

8. `Current CTC (LPA)`
- Type: single select or numeric input depending on current implementation
- Required: yes

9. `What are you here to achieve?`
- Type: tile selection
- Required: yes
- Notes: should feel like mission capture, not persona classification

### Derived data

Use the following derived properties after this step:

- `is_tech_profile`
- `experience_band`
- `career_stage`

### Suggested tech classification logic

Mark learner as likely tech if current job role falls into categories like:

- Software engineer
- Developer
- QA / SDET
- Data engineer
- Data analyst
- ML engineer
- DevOps / platform / cloud
- Product roles with technical execution emphasis

Mark learner as likely non-tech if role falls into categories like:

- Sales
- Marketing
- Operations
- Finance
- HR
- Support
- Non-technical consulting

If role is ambiguous:

- Use academic specialization
- Use tech experience years
- If still uncertain, default to the simpler non-tech AI path or use an internal fallback mapping

### Important product note

Do not ask the learner to explicitly choose `tech` vs `non-tech` as a visible branch-selection question.

Instead:

- infer that path internally,
- keep the visible question outcome-focused,
- use mission tiles to capture what the learner wants from the journey.

### Suggested mission tile options

- Switch into a stronger role
- Grow faster in my current path
- Become more AI-ready
- Become interview-ready
- Build stronger projects
- Add your own goal

## Step 3: Programming Readiness

### Objective

Understand the learner's current comfort across core technical skill areas without making the form too heavy.

### Questions

1. `How would you rate your programming proficiency today?`
- Type: single select
- Required: yes
- Suggested options:
  - Beginner
  - Basic working knowledge
  - Comfortable
  - Strong
  - Advanced

2. `How would you rate your DSA proficiency today?`
- Type: single select
- Required: yes
- Suggested options:
  - Beginner
  - Basic working knowledge
  - Comfortable
  - Strong
  - Advanced

3. `How would you rate your SQL and databases proficiency today?`
- Type: single select
- Required: yes
- Suggested options:
  - Beginner
  - Basic working knowledge
  - Comfortable
  - Strong
  - Advanced

4. `When solving technical tasks today, which best describes you?`
- Type: single select
- Required: yes
- Suggested options:
  - I solve mostly on my own
  - I rely heavily on docs or search
  - I often use AI support
  - I need significant help

### Why this step is intentionally light

- Keeps self-assessment simple
- Adds one behavioral signal beyond static proficiency
- Avoids turning FTUE into a technical diagnostic test

## Step 4: AI Readiness

### Objective

Understand how prepared the learner is for an AI-shaped professional world and personalize the journey accordingly.

### Design rules

- Mandatory for all users
- Branching based on tech vs non-tech profile
- Maximum 4 questions per branch
- Use mostly chips, dropdowns, or multi-select

### Shared question shown to everyone

1. `How familiar are you with AI tools today?`
- Type: single select
- Required: yes
- Suggested options:
  - I have not really used AI tools
  - I have tried them casually
  - I use them sometimes for work or learning
  - I use them regularly
  - I rely on them heavily in my workflow

## Step 4A: AI Readiness for Tech Learners

### Entry condition

Show if `is_tech_profile = true`

### Questions

1. `How much of your coding or work currently involves AI?`
- Type: single select
- Required: yes
- Suggested options:
  - Almost none
  - A small part of my work
  - A moderate part of my work
  - A major part of my work
  - I rely on AI extensively

2. `Which AI tools have you used?`
- Type: multi-select
- Required: yes
- Suggested options:
  - ChatGPT
  - Claude
  - Gemini
  - GitHub Copilot
  - Cursor
  - Windsurf
  - Perplexity
  - Replit AI
  - Lovable / Bolt / similar builders
  - Company internal tools
  - Other

3. `What do you use AI for most often?`
- Type: multi-select
- Required: yes
- Suggested options:
  - Learning concepts
  - Writing code
  - Debugging
  - Refactoring
  - Writing tests
  - Documentation
  - SQL queries
  - System design exploration
  - Interview preparation
  - Productivity tasks

4. `What is the biggest issue you face with AI today?`
- Type: multi-select
- Required: yes
- Suggested options:
  - Outputs are often wrong
  - I do not trust the answers fully
  - I struggle to prompt well
  - Debugging AI-generated code takes too long
  - I am not sure when to use AI vs do it myself
  - I worry about overdependence
  - Tooling access or company restrictions
  - I do not have a clear workflow
  - Other

## Step 4B: AI Readiness for Non-Tech Learners

### Entry condition

Show if `is_tech_profile = false`

### Questions

1. `Which AI tools are you aware of or have tried?`
- Type: multi-select
- Required: yes
- Suggested options:
  - ChatGPT
  - Claude
  - Gemini
  - Perplexity
  - Canva AI
  - Notion AI
  - Copilot
  - Midjourney or image tools
  - No-code AI app builders
  - Other
  - I have not tried any yet

2. `What have you used AI for so far?`
- Type: multi-select
- Required: yes
- Suggested options:
  - Research
  - Writing
  - Presentations
  - Analysis
  - Summarization
  - Daily repetitive tasks
  - Learning new topics
  - Workflow automation
  - I have not really used AI yet

3. `Have you created anything with AI yet?`
- Type: single select
- Required: yes
- Suggested options:
  - No, not yet
  - I have only experimented a little
  - I have used prompting to make simple outputs
  - I have tried simple no-code or vibe-coded projects
  - I have used AI in real projects or meaningful work

4. `What is the biggest blocker for you today?`
- Type: multi-select
- Required: yes
- Suggested options:
  - I do not know where to start
  - I do not know which tools matter
  - I am not confident prompting well
  - I do not know how to turn ideas into workflows
  - I am not technical enough
  - The outputs feel unreliable
  - I do not yet see a use case for my work
  - I have not had enough hands-on practice
  - Other

## Step 5: Goal / Mission

### Objective

Capture learner intent so the program can frame their journey in a way that feels personal and outcomes-oriented.

### Questions

1. `What is your goal entering this program?`
- Type: chips + optional multi-select if business allows multiple goals
- Required: yes
- Suggested chip options:
  - Switch jobs
  - Grow in current role
  - Salary jump
  - Become interview-ready
  - Get strong in DSA
  - Become AI-ready engineer
  - Move into tech
  - Build stronger projects
  - Gain confidence
  - Other

2. `In one line, what would make this program successful for you?`
- Type: short text input
- Required: no but strongly recommended
- Character guidance: 120 to 180 characters

### Product note

This step is one of the most important inputs for the personalized letter and dashboard personalization.

The current prototype direction also allows mission capture to begin earlier in the journey through tiles on the work-and-education screen.

## Step 6: Motivation

### Objective

Capture emotional purchase drivers and learner expectations from the brand.

### Questions

1. `What got you excited about Scaler?`
- Type: multi-select
- Required: yes
- Suggested options based on current flow:
  - 1:1 Mentorship
  - Curriculum
  - Placement
  - Success of alumni
  - Instructor
  - Live class

### Notes

- Preserve current existing options in v0 for continuity
- This signal should influence letter tone and recommendations

## Completion Screen: Personalized Letter

### Objective

Create a premium completion experience that makes the learner feel seen, challenged, and guided.

### What should happen

- Generate a personalized letter immediately after FTUE submission
- Show it on screen
- Save it in learner dashboard
- Make it available for email delivery

### Current product recommendation

- Use a short onboarding letter as the immediate post-FTUE experience
- Avoid a heavy report at this point in the journey
- Let deeper journey detail emerge later in dashboard onboarding and meet-and-greet sessions

### UI suggestions

- Header: `A letter for your journey ahead`
- Personalized salutation
- 4 to 6 short paragraphs
- Optional highlighted `Your first focus areas` section
- CTA: `Go to dashboard`

### Recommended reading length

Target a read time of roughly 45 to 60 seconds.

## Personalized Letter Template Framework

### Tone

- Aspirational
- Motivational
- Clear-eyed
- Premium
- Personal but not overly dramatic

### Inputs used by the generator

- Learner name
- Academic specialization
- Current role
- Total experience
- Tech experience
- Programming proficiency
- DSA proficiency
- SQL proficiency
- Technical task confidence signal
- AI familiarity
- AI usage patterns
- AI blockers
- Goal / mission chips
- Goal free text
- Motivation selections

### Inputs not to surface directly in learner copy

- Guardian information
- Pincode
- CTC unless explicitly approved later

### Recommended output structure

1. `Greeting`
- Address the learner by name

2. `Recognition`
- Reflect their starting point and why they are here

3. `Current readiness`
- Summarize technical and AI maturity in simple language

4. `What the next few months may look like`
- Set expectations around intensity, pace, consistency, and growth

5. `How AI changes the game in their path`
- Make this role-relevant
- For tech learners, emphasize prompting, reviewing, debugging, validating, and shipping with AI
- For non-tech learners, emphasize workflow thinking, problem breakdown, tool leverage, and real-world application

6. `What is expected from you`
- Explicitly set expectations on effort, discipline, consistency, and ownership

7. `How the program will help with your current gaps`
- Example: if they struggle with debugging AI-generated code, reassure them that early modules and guided practice address that directly

8. `Aspirational close`
- Reconnect to their goal / mission and reinforce belief

## Example Personalization Logic

### Tech learner with low AI maturity

Letter emphasis:

- Strong engineering foundation still matters
- AI is now a force multiplier, not a shortcut
- Learn to use AI for learning, coding, debugging, and verification
- Build judgment, not dependence

Recommended first focus areas:

- Use AI to explain concepts and compare solutions
- Practice debugging AI-generated code
- Build a repeatable workflow for problem solving

### Tech learner with high AI maturity

Letter emphasis:

- Speed is not enough without accuracy and judgment
- Competitive edge comes from verification, architecture thinking, and reliable execution
- Learn when to trust AI and when to challenge it

Recommended first focus areas:

- Review and refine AI-generated output critically
- Strengthen system thinking beyond auto-generated code
- Use AI to accelerate, not replace, deep understanding

### Non-tech learner with low AI exposure

Letter emphasis:

- AI literacy is becoming a core professional advantage
- You do not need to become deeply technical to start using AI well
- Start with workflows, prompting, and repeated hands-on practice

Recommended first focus areas:

- Use one or two tools regularly
- Turn recurring tasks into simple AI workflows
- Build confidence through small practical projects

### Non-tech learner with strong AI experimentation

Letter emphasis:

- Move from experimentation to repeatable capability
- Learn where AI outputs need structure, evaluation, and judgment
- Focus on creating useful outcomes, not just trying tools

Recommended first focus areas:

- Identify role-specific AI use cases
- Build a repeatable workflow for those use cases
- Evaluate output quality and improve prompts systematically

## Immediate Post-FTUE Personalization

AI readiness should influence the first dashboard experience.

### Suggested examples

If learner has low AI maturity:

- Show an `AI starter guide`
- Recommend a first foundational module

If learner has medium AI maturity:

- Show applied use cases for learning, debugging, and project work

If learner has high AI maturity:

- Show advanced guidance on verification, judgment, and avoiding overdependence

If learner selected `switch jobs` or `become interview-ready`:

- Bias dashboard recommendations toward interview prep, project credibility, and consistency

If learner selected `move into tech`:

- Bias toward structured fundamentals and confidence-building

## Data Model Suggestions

These are suggested logical entities, not final engineering schema decisions.

### Core FTUE response groups

- `profile_details`
- `work_education`
- `programming_readiness`
- `ai_readiness`
- `goal_mission`
- `motivation`

### Useful derived attributes

- `is_tech_profile`
- `programming_band`
- `ai_maturity_band`
- `goal_category`
- `recommended_dashboard_track`

## Validation and UX Notes

- Use progress indicators consistently
- Preserve draft state within the FTUE session if possible
- Keep copy crisp and confidence-building
- Avoid paragraph-heavy instructions on question screens
- Make all multi-select behavior explicit
- Use helper text only where it reduces confusion

## Launch Metrics for v0

### Primary metrics

- FTUE completion rate
- Step-wise drop-off rate
- Time to complete FTUE
- Personalized letter view rate
- Dashboard entry rate after FTUE

### Secondary metrics

- Distribution of AI maturity segments
- Distribution of learner goals
- Share of tech vs non-tech learners
- Email open rate for personalized letter if sent
- Return visits to saved letter in dashboard

## Open Product Decisions for Later

These do not block v0 blueprint sign-off but should be handled during implementation planning:

- Final wording of each answer option
- Existing backend taxonomy compatibility
- Whether goal chips should be single-select or multi-select
- Whether LinkedIn is required or optional in the current business logic
- Exact dashboard modules shown for each personalized segment
- Email trigger timing and retry rules

## v0 Summary

The FTUE v0 should:

- Keep all current mandatory business-critical data capture
- Add a dedicated AI readiness step
- Add a goal / mission step
- Preserve programming proficiency capture
- Keep the form light through structured inputs
- End with a personalized letter instead of a generic completion message
- Use that same personalization to shape the learner's first dashboard experience
