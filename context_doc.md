# FTUE v0 Context Document

## Objective

Design a new mandatory first-time user experience (FTUE) journey for learners who have completed payment and are logging into the dashboard for the first time.

This FTUE should achieve three things:

1. Collect all required compliance and audit inputs.
2. Understand the learner's technical and AI readiness.
3. End with a premium, personalized onboarding moment through a tailored letter.

## Key Product Decisions

### 1. Existing inputs must remain

Do not remove any current inputs from the existing FTUE form journey. These fields are required for tax audit and compliance purposes.

### 2. Programming proficiency must be captured

The new FTUE must continue to capture the learner's proficiency in core programming areas such as:

- Programming
- DSA
- SQL / Databases

### 3. AI readiness must be captured

The new FTUE must capture the learner's experience with AI.

For tech professionals, this should assess:

- How much of their coding or work they currently do using AI
- Which AI tools they are aware of or actively use
- What use cases they rely on AI for
- What issues or blockers they face while using AI

For non-tech professionals, this should assess:

- Which AI tools they are aware of or have tried
- How much practical AI usage they have done
- Whether they have done prompting only, used AI for routine tasks, or tried building projects / vibe-coded products
- What blockers they face in adopting AI more effectively

### 4. Goal / mission input must be added

The learner should be asked what their goal or mission is when entering the program.

This should be captured using:

- Chips / predefined options
- Optional free text for additional context

This goal capture should feel outcome-oriented.

It should focus on what the learner wants to achieve after entering the program, not on whether the learner self-identifies as tech or non-tech.

### 5. FTUE remains mandatory

The FTUE can remain fully mandatory before dashboard access for v0.

The team can optimize field load and sequencing later after a live v0 is launched and measured.

### 6. Personalized letter is required post-completion

After the learner completes the FTUE, the system should generate a personalized letter for that learner.

This letter should:

- Be shown immediately on the completion screen
- Be saved inside the dashboard
- Be possible to email to the learner

Current product direction:

- The primary final artifact should be a simple, premium onboarding letter
- Do not default to a heavy diagnostic report immediately after FTUE completion
- The dashboard, meet-and-greet sessions, and later onboarding layers can carry deeper journey detail

### 7. Letter tone

The personalized letter should be aspirational and motivational.

It should communicate:

- What is expected from the learner going forward
- What the next phase / next few months may look like
- How AI has changed expectations in their desired role or path
- What mindset and effort will be needed to succeed
- How the learner's stated AI issues or gaps will be addressed by the curriculum

### 8. Personalization inputs

The personalized letter should use all major relevant learner signals, including:

- Name
- Work / education background
- Current role
- Experience
- Academic specialization
- Programming proficiency
- AI readiness
- Goal / mission
- Motivation for joining

Sensitive compliance fields may be used internally if needed, but should not be surfaced in learner-facing copy unless explicitly required.

### 9. Generation strategy

The personalized letter should not be fully freeform AI generation.

Recommended approach:

- Template-based structure
- AI-personalized sections inside the template

This ensures quality control, consistency, and premium tone.

## Recommended FTUE v0 Structure

## UX direction for the form journey

- The form screens should feel lightweight and premium.
- Narrative framing should be strong, but screen density should stay low.
- Avoid heavy split-pane layouts for data-entry steps unless a pane adds clear value.
- Welcome and form screens should prioritize whitespace, hierarchy, and confidence over explanation-heavy layouts.

### Welcome Screen

Keep the premium founder / welcome message as the opening moment.

This screen should:

- Stay light on content
- Lead with a strong hook line
- Use a founder-style quote or short message
- Feel like a premium welcome, not a product explainer

### Step 1: Profile Details

Retain current fields:

- Title
- Name
- Date of birth
- Guardian / secondary contact name
- Relationship
- Guardian / secondary contact number
- Area pincode

### Step 2: Work & Education

Retain current fields:

- LinkedIn profile
- Academic specialization
- Current job role
- Total experience
- Tech experience
- Current CTC

This screen should also introduce the learner's mission in a premium way.

Instead of asking the learner to explicitly choose `tech` vs `non-tech`, the system should infer that internally using current role and experience.

The user-facing experience should ask:

- What are you here to achieve?

This should be shown as tiles, with support for:

- Predefined goal tiles
- A custom tile / custom-goal pattern

### Step 3: Programming Readiness

Retain current proficiency capture:

- Programming proficiency
- DSA proficiency
- SQL / Databases proficiency

Add one lightweight practical self-assessment signal:

- When solving technical tasks today, which best describes you?

Suggested options:

- I solve mostly on my own
- I rely heavily on docs / search
- I often use AI support
- I need significant help

### Step 4: AI Readiness

This should be a dedicated mandatory step with branching for tech vs non-tech users.

#### Common entry question

- How familiar are you with AI tools today?

#### If learner is classified as tech

Ask up to 4 lightweight questions:

- How much of your coding / work currently involves AI?
- Which AI tools have you used?
- What do you use AI for most often?
- What is the biggest issue you face with AI today?

#### If learner is classified as non-tech

Ask up to 4 lightweight questions:

- How familiar are you with AI tools?
- Which tools are you aware of or have tried?
- Have you created anything with AI yet?
- What is the biggest blocker for you today?

Important non-tech signals to include:

- Prompting only
- AI for routine / redundant tasks
- AI for research / writing / productivity
- Simple no-code or vibe-coded projects
- No meaningful hands-on experience yet

### Step 5: Goal / Mission

Add a new step to capture why the learner is entering the program.

Question:

- What is your goal entering this program?

Input format:

- Chips / predefined options
- Optional free text

Suggested chips:

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

Optional follow-up:

- In one line, what would make this program successful for you?

### Step 6: Motivation

Retain current motivation capture:

- What got you excited about Scaler?

This remains useful for emotional and purchase-intent understanding.

### Completion Screen

Replace the generic "You are all set" moment with a personalized onboarding letter.

## Tech vs Non-Tech Classification

Primary recommendation:

- Infer tech vs non-tech using current job role

Fallback:

- Use academic specialization and role-family mapping if current job role is ambiguous

Avoid adding an extra explicit tech / non-tech question unless classification confidence is too low.

Current product direction:

- Do not ask the learner to choose `tech` vs `non-tech` as an explicit mission-level input.
- Keep this as an internal branching decision.

## Personalized Letter: Recommended Structure

### 1. Greeting

Address the learner by name.

### 2. Recognition of their starting point

Summarize who they are based on:

- Current role
- Background
- Experience
- Mission / goal

### 3. Readiness summary

Briefly reflect:

- Programming proficiency
- AI maturity

### 4. What the next few months may look like

Set expectations on:

- Pace
- Effort
- Learning curve
- Progress shape

### 5. How AI changes the game

Make role-relevant commentary on how AI has changed expectations in the learner's path.

Example direction:

- It is no longer just about coding manually
- Learners must learn how to work with AI, review AI output, debug it, validate it, and use it responsibly

### 6. What is expected from the learner

Explicitly call out:

- Consistency
- Ownership
- Practice
- Discipline

### 7. First 3 focus areas

Provide three concrete near-term behaviors or focus areas.

### 8. Aspirational close

Reconnect the learner to their declared goal and reinforce belief in the journey ahead.

## Current recommendation for the final experience

Use:

- A short personalized onboarding letter

Avoid:

- A heavy report as the immediate post-FTUE artifact

Reason:

- The learner will continue discovering their journey inside the dashboard and onboarding sessions
- Immediately after FTUE, reassurance and direction matter more than heavy analysis
- A letter is more likely to feel personal, premium, and easy to consume

## Experience Personalization Beyond the Letter

AI readiness should influence the immediate post-FTUE experience, not just the letter.

Examples:

- Low AI maturity: show starter guidance on how to learn with AI responsibly
- Medium AI maturity: show guidance for using AI in practice, debugging, and concept learning
- High AI maturity: show guidance on verification, judgment, and avoiding overdependence

This can later inform:

- Dashboard recommendations
- Starter resources
- Initial tasks or guidance modules

## v0 Design Principle

For v0, optimize for:

- Strong segmentation
- High completion
- Premium feeling
- Good personalized output

Do not optimize yet for:

- Reducing the number of fields
- Deep adaptive logic
- Perfectly mature personalization

Those can be improved in later iterations after observing real user behavior.

## Final Locked v0 Scope

- Keep all current FTUE fields
- Add goal / mission capture
- Add a dedicated AI readiness step with tech / non-tech branching
- Retain programming proficiency capture
- Add one lightweight practical programming self-assessment signal
- Retain motivation capture
- Replace generic completion with a personalized letter
- Show the letter immediately, save it in the dashboard, and make it available for email
- Use template-based generation with AI-personalized sections
