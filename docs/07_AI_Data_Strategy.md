# SkillRoute — AI & Data Strategy

## AI role
AI supports personalization rather than acting as a decorative chatbot. It compares a structured student profile with role/skill requirements, explains likely gaps, prioritizes actions and generates an actionable route grounded in the selected career/skill dataset.

## Input → AI/Data → Output
**INPUT:** career goal + education + existing skills + projects + experience + confidence

**DATA:** role requirements + skill relationships + learning/project resources

**AI PROCESSING:** profile comparison + gap explanation + prioritization + roadmap generation

**OUTPUT:** skill-gap report + learning sequence + project suggestions + next steps

## Data pipeline
DATA SOURCE → DATA COLLECTION → DATA CLEANING → DATA STORAGE → AI / LLM → USER QUERY → AI PROCESSING → OUTPUT

## Proposed schema
- CareerRole: role, level, description
- Skill: name, category, prerequisites
- RoleSkill: role, skill, priority, proficiency
- StudentSkill: confidence, evidence, progress
- Resource: learning/project item linked to skill

## Five meaningful questions
1. What are my biggest skill gaps for Frontend Developer?
2. What should I learn first?
3. Why is React a priority for me?
4. Which project should I build next?
5. What changed after I updated my skills?

## Synthetic demo scenario
Engineering student; JavaScript confidence 3/5; Git 4/5; no React project; target role = Frontend Developer.

Illustrative output: Git is strong; React is the top gap because the selected role expects component-based UI development and there is no React project evidence. Suggested route: React fundamentals → small project → API integration → reassess.

## Privacy
Prototype data should be public, anonymized or synthetic. Do not use Aadhaar, PAN, passwords, bank or medical records.

## Prototype note
This strategy documents the AI architecture and test questions. A production LLM integration is the next implementation layer after validation.
