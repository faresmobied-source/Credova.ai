# Credova.ai -- SaaS Explainer Video Storyboard

**Version:** 1.0
**Date:** 2026-03-16
**Format:** 9:16 Portrait (1080x1920px render, source assets 1182x2556px)
**Frame Rate:** 60fps
**Duration:** 60.0 seconds (0:00.0 -- 1:00.0)
**Music:** WHATDAHEEE.mp3 (using 0:00 -- 1:00 of 1:59.6 total)
**Codec Target:** H.264, 20Mbps CBR

---

## Creative Direction

### Concept: "Arrival"
The video tells the emotional arc of a newcomer arriving in Canada and finding clarity through Credova. We move from darkness (uncertainty) into light (confidence). The pacing mirrors the music: restrained mystery during the intro, explosive energy at the drops, contemplative stillness at the breakdown, and triumphant resolution at the climax.

### Visual Language
- **Dark sections** (charcoal #1A1A1A backgrounds) for hook and transition moments -- creates cinema-grade contrast
- **Light sections** (soft white #F8FAF9 with faint mint gradient) for app showcase moments -- clean, breathable, premium
- **3D perspective** on all phone screens: subtle rotateY(5-12deg) with parallax shadow, matching the Felix reference
- **Floating UI cards** extracted from screens fly in with staggered delays (50-80ms between elements), just like Felix's multi-card compositions
- **Depth of field** simulated with layered blur: foreground elements sharp, background elements at 4-8px gaussian blur
- **Ambient particles**: slow-drifting mint-green (#34D399 at 15% opacity) circle particles throughout dark sections, 0.5-1.5px diameter, drift speed 20px/s

### Color Grading
- Lift shadows slightly toward teal (+5 in blue-green channel)
- Subtle vignette on all frames (15% opacity, 70% radius)
- Bloom/glow on mint-green (#34D399) elements: 8px radius, 40% intensity
- Overall contrast: +8%, saturation: +5%
- Dark sections: crushed blacks at RGB 18,18,18 (not pure black)

### Typography Standards
- **Primary headlines:** Plus Jakarta Sans, 700 weight, 64px, tracking -0.02em, color #FFFFFF (on dark) or #1A1A1A (on light)
- **Secondary text:** DM Sans, 400 weight, 32px, tracking 0.01em, color #FFFFFF at 70% opacity (on dark) or #6B7280 (on light)
- **Accent labels:** DM Sans, 600 weight, 24px, ALL CAPS, tracking 0.08em, color #34D399
- **Tagline:** Plus Jakarta Sans, 500 weight, 40px, tracking -0.01em
- All text enters via fade-up (translateY +20px to 0, opacity 0 to 1) with cubic-bezier(0.16, 1, 0.3, 1), duration 400ms

---

## Scene Timing Table (Quick Reference)

| # | Scene Name | Time | Duration | Music Moment | Primary Asset |
|---|-----------|------|----------|-------------|---------------|
| 1 | Black Void | 0:00.0--0:02.0 | 2.0s | Intro low hum | None (generated) |
| 2 | Logo Bloom | 0:02.0--0:06.5 | 4.5s | Intro buildup | credova_logo.png |
| 3 | Welcome Slam | 0:06.5--0:09.5 | 3.0s | DROP 1 hit | 01_welcome.png |
| 4 | Onboarding Cascade | 0:09.5--0:14.0 | 4.5s | Drop 1 sustained | 03_name_country, 04_usertype |
| 5 | Goals Burst | 0:14.0--0:19.0 | 5.0s | Drop 1 peak | 07_goals.png |
| 6 | Breath | 0:19.0--0:22.5 | 3.5s | Breakdown 1 | 11_success.png |
| 7 | Dashboard Power | 0:22.5--0:28.0 | 5.5s | DROP 2 main | 06_home_dashboard.png |
| 8 | Nova Conversation | 0:28.0--0:34.0 | 6.0s | Drop 2 sustained | 05_chat.png |
| 9 | Roadmap Journey | 0:34.0--0:42.0 | 8.0s | Drop 2 closing | 08_roadmap.png |
| 10 | The Silence | 0:42.0--0:45.0 | 3.0s | NEAR SILENCE | credova_logo.png |
| 11 | Tools Arsenal | 0:45.0--0:50.0 | 5.0s | Build 3 recovery | 09_tools.png |
| 12 | Profile & Progress | 0:50.0--0:54.0 | 4.0s | Section B | 10_profile.png |
| 13 | Tagline Card | 0:54.0--0:58.0 | 4.0s | Section B | None (generated) |
| 14 | Logo Stamp | 0:58.0--1:00.0 | 2.0s | Section B | credova_logo.png |

---

## Detailed Scene Breakdown

---

### SCENE 1: Black Void
**Act: HOOK**

| Field | Detail |
|-------|--------|
| Timestamp | 0:00.0 -- 0:02.0 |
| Duration | 2.0 seconds (120 frames) |
| Music moment | Low ambient hum, sub-bass buildup beginning. Near silence. Tension building. |
| Screen/visual | Pure charcoal void (#1A1A1A). A single, barely visible horizontal line of mint green (#34D399 at 8% opacity) pulses once across the center of frame at 0:01.0, like a heartbeat on a monitor. Ambient particles fade in from 0% to 15% opacity. |
| Motion | Particles drift upward at 15px/s. The pulse line expands from center outward (0px to full width) over 300ms, then fades over 500ms. |
| Transition in | Hard cut from black (frame 1 is pure #1A1A1A). |
| Transition out | The pulse line's afterglow concentrates into center, forming the seed point for the logo in Scene 2. |
| Text overlay | None. |
| Emotional beat | Mystery. Anticipation. "Something is about to happen." |
| Technical notes | Easing on pulse: cubic-bezier(0.25, 0.46, 0.45, 0.94) for expansion, linear for fade. Layer order: background (solid) > particles (additive blend) > pulse line (screen blend). |

---

### SCENE 2: Logo Bloom
**Act: HOOK**

| Field | Detail |
|-------|--------|
| Timestamp | 0:02.0 -- 0:06.5 |
| Duration | 4.5 seconds (270 frames) |
| Music moment | Intro buildup intensifying. Synth layers stacking. Energy rising toward the first drop. |
| Screen/visual | The Credova "C" logo (credova_logo.png) materializes from the center glow point. The logo renders at 240x240px centered on screen. Background remains charcoal #1A1A1A. A soft radial gradient (mint #34D399 at 12% opacity, radius 400px) breathes behind the logo. |
| Motion | **0:02.0-0:03.5**: Logo scales from 0.3x to 1.0x with spring physics (damping 0.6, stiffness 180). Simultaneous rotation from -15deg to 0deg on Z-axis. Opacity 0 to 100%. **0:03.5-0:05.0**: Logo settles, radial glow pulses (12% to 18% to 12% opacity, one full cycle over 1.5s). **0:05.0-0:06.5**: Logo begins slow scale from 1.0x to 1.15x (anticipation for the drop). Background glow intensifies to 25% opacity. Particles accelerate from 15px/s to 40px/s. |
| Transition in | Crossfade from pulse glow point (Scene 1 exit) -- the glow morphs into the logo center. 200ms overlap. |
| Transition out | At exactly 0:06.5 (the drop), logo PUNCHES scale to 3.0x over 150ms then immediately cuts to Scene 3. The scale punch creates a flash-white overlay at 60% opacity for the last 3 frames (50ms). |
| Text overlay | **"credova.ai"** appears below logo at 0:04.0. Plus Jakarta Sans, 500 weight, 36px, #FFFFFF at 60% opacity. Fade-up animation (translateY +15px to 0, opacity 0 to 60%) over 400ms. At 0:06.3 it fades out over 200ms. |
| Emotional beat | Recognition. Brand introduction. Building excitement. |
| Technical notes | Spring physics for logo entrance: use `spring(1, 180, 18)` or equivalent. The scale punch at 0:06.5 must land EXACTLY on the first beat of Drop 1 -- this is the most critical sync point in the entire video. Layer order: background > radial gradient > particles > logo > text. Logo asset should be rendered with 2x resolution headroom for the 3x scale punch. |

---

### SCENE 3: Welcome Slam
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:06.5 -- 0:09.5 |
| Duration | 3.0 seconds (180 frames) |
| Music moment | DROP 1 -- first massive impact. High energy, driving beat, maximum attack. |
| Screen/visual | 01_welcome.png in a 3D phone mockup. The phone frame is a minimal dark bezel (2px #333333 border, 24px rounded corners). Screen displayed at 65% of frame width (roughly 700px wide in 1080 canvas), centered horizontally, positioned at 40% from top. Background: clean white #F8FAF9 with a barely-visible radial gradient of mint at 5% opacity behind the phone. |
| Motion | **0:06.5-0:07.0 (500ms)**: Phone SLAMS in from below frame (translateY from +1200px to final position). Rotation: starts at rotateX(25deg) rotateY(-8deg), lands at rotateX(2deg) rotateY(-5deg). Scale from 1.1x to 1.0x. This is aggressive, fast, percussive -- matching the drop. **0:07.0-0:09.5**: Phone holds with gentle floating drift: translateY oscillates +/- 8px over 2.5s (sine wave). Subtle rotateY oscillation from -5deg to -3deg and back. Soft shadow beneath phone (20px blur, #000000 at 15% opacity, offset-y 30px) that moves with the float. |
| Transition in | Hard cut from the white flash at end of Scene 2. The background switches from dark to light in a single frame -- the contrast is the impact. |
| Transition out | Phone begins scaling down to 0.85x and drifting right (+80px) over the last 400ms, making room for incoming elements in Scene 4. Opacity stays 100%. |
| Text overlay | **"Meet Credova"** -- Plus Jakarta Sans, 700, 52px, #1A1A1A. Positioned at 82% from top (below phone). Enters at 0:07.5 via fade-up, 400ms duration. |
| Emotional beat | Impact. Arrival. "Here it is." First impression of the product. |
| Technical notes | The slam-in easing: cubic-bezier(0.16, 1, 0.3, 1) -- fast attack, soft settle. Shadow must be a separate layer that compresses/stretches during the slam (scaleX 0.8 to 1.0 during entry). Phone mockup is generated (not an asset) -- just the screen PNGs composited into a minimal bezel frame. Z-index: background > shadow > phone > text. |

---

### SCENE 4: Onboarding Cascade
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:09.5 -- 0:14.0 |
| Duration | 4.5 seconds (270 frames) |
| Music moment | Drop 1 sustained energy. Rhythmic, driving, consistent pulse. |
| Screen/visual | Felix-style multi-card composition on white background. Three UI elements float simultaneously: (1) 03_name_country.png cropped to the form section only (name field + country dropdown, approximately top 55% of screen), displayed as a rounded card (20px radius) at top-left. (2) 04_usertype.png cropped to the selection cards ("I'm a student" highlighted), displayed as a rounded card at center-right. (3) A generated accent card (charcoal #1A1A1A, 200x120px, 16px radius) at bottom-center containing the text "Personalized for you" in mint #34D399, 24px DM Sans 600. |
| Motion | **Staggered fly-in (0:09.5-0:10.5)**: Card 1 enters from left (translateX -400px, rotateY 15deg) at 0:09.5. Card 2 enters from right (translateX +400px, rotateY -12deg) at 0:09.7 (+200ms stagger). Card 3 enters from bottom (translateY +300px) at 0:09.9 (+400ms stagger). All cards use cubic-bezier(0.16, 1, 0.3, 1), 600ms duration. **0:10.5-0:14.0**: All cards float with independent drift patterns. Card 1: slow clockwise orbit (radius 5px, period 4s). Card 2: vertical bob (+/- 6px, period 3s). Card 3: horizontal drift (+/- 4px, period 3.5s). Cards maintain subtle 3D tilt (rotateX 3deg rotateY +/- 5deg). |
| Transition in | Card 1 enters as Scene 3's phone is still exiting right (200ms overlap creates a relay feeling). |
| Transition out | All three cards simultaneously scale to 0.7x and drift toward center over 400ms while opacity fades to 0% over the last 300ms. They collapse inward as if being absorbed. |
| Text overlay | None (the generated accent card contains its own text). |
| Emotional beat | Personalization. "This adapts to you." Speed and fluidity. |
| Technical notes | Each card has its own drop shadow: 12px blur, #000000 at 10% opacity, offset-y 8px. Crop the screen PNGs in advance -- use only the relevant UI section, not the full phone frame (no status bar, no nav bar). Cards should be roughly: Card 1 at 380x300px, Card 2 at 340x200px, Card 3 at 200x120px. The size variation creates visual hierarchy. Layer order: background > Card 1 > Card 2 > Card 3 (front). |

---

### SCENE 5: Goals Burst
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:14.0 -- 0:19.0 |
| Duration | 5.0 seconds (300 frames) |
| Music moment | Drop 1 reaching its peak intensity before the breakdown. Maximum drive. |
| Screen/visual | 07_goals.png displayed in a 3D phone mockup, centered. Background shifts to a split: left half white, right half charcoal -- the dividing line is a soft 60px gradient blend running vertically at 55% from left (slightly off-center for dynamism). Six small floating badge pills orbit around the phone, each one representing a goal from the screen: "Bank Account", "Credit Score", "Send Money", "Avoid Scams", "Budget", "Explore". Each badge is a pill shape (auto-width x 36px, 18px radius) with mint background #34D399 and white text, 18px DM Sans 600. |
| Motion | **0:14.0-0:14.8 (800ms)**: Phone enters from top (translateY -1000px), landing with a bounce (overshoot to +20px then settle). rotateY from 10deg to -4deg. **0:14.8-0:16.0**: Badge pills burst outward from behind the phone in a staggered radial pattern (100ms stagger between each). They fly from the phone center to their orbital positions (radius ~320px from phone center, evenly distributed at 60deg intervals). Each pill has a springy overshoot. **0:16.0-0:19.0**: Phone floats gently. Pills orbit slowly (1 revolution per 20s, so roughly 54deg of arc during this hold). Individual pills gently bob on their own vertical axis (+/- 3px). |
| Transition in | Hard cut on a beat hit at 0:14.0. Background split wipes in from left over 200ms. |
| Transition out | Pills accelerate inward, snapping back to the phone center. Phone scales down rapidly (1.0x to 0.0x over 400ms) -- implosion effect. Last 100ms: a single mint-green ring expands outward from center (0px to full frame) and fades, transitioning to Scene 6. |
| Text overlay | **"Your goals. Your pace."** -- Plus Jakarta Sans, 700, 48px, #FFFFFF. Positioned at 85% from top. Enters at 0:15.5, fade-up 400ms. Exits with the implosion. |
| Emotional beat | Empowerment. Choice. "You're in control." The orbiting badges create a sense of a complete ecosystem. |
| Technical notes | Badge pill generation: render these as simple shape layers with text -- not extracted from the PNG. The orbital motion uses polar coordinates converted to cartesian: x = cx + r*cos(angle + time*speed), y = cy + r*sin(angle + time*speed). Each pill offset by 60deg (pi/3 radians). Drop shadow on phone: 24px blur, 20% opacity. The split background gradient should be animated: the dividing line slowly drifts right at 5px/s during the scene. |

---

### SCENE 6: Breath
**Act: SHOWCASE (transition beat)**

| Field | Detail |
|-------|--------|
| Timestamp | 0:19.0 -- 0:22.5 |
| Duration | 3.5 seconds (210 frames) |
| Music moment | Breakdown 1 -- energy drops sharply. Brief respite. Atmospheric, sparse. |
| Screen/visual | 11_success.png ("You're all set, Fares!") displayed as a centered card WITHOUT phone mockup -- just the screen content floating as a large rounded rectangle (32px radius, subtle 1px #E5E7EB border). Card is at 80% of frame width. Background: soft gradient from white (#FAFAFA) at top to pale mint (#F0FDF9) at bottom. A very soft animated checkmark: the mint circle/checkmark from the success screen is echoed as a larger background element (400x400px, #34D399 at 6% opacity) pulsing behind the card. |
| Motion | **0:19.0-0:20.0**: Card fades in gently (opacity 0 to 100%, scale 0.95x to 1.0x). This is deliberately slow and calm -- matching the musical breakdown. Easing: cubic-bezier(0.4, 0, 0.2, 1). **0:20.0-0:22.5**: Card rests nearly still. Barely perceptible scale oscillation (1.0x to 1.005x to 1.0x, period 3s). The background checkmark echo pulses once (6% to 10% to 6% opacity over 2s). |
| Transition in | The expanding mint ring from Scene 5 dissolves into the pale background. 300ms crossfade overlap. |
| Transition out | Card slides down and scales to 0.9x over 300ms while a charcoal (#1A1A1A) rectangle wipes down from the top of frame over 200ms -- transitioning to the dark background of Scene 7. |
| Text overlay | None (the success screen's own "You're all set, Fares!" serves as the text). |
| Emotional beat | Relief. Accomplishment. A moment to breathe before the next wave. "Setup complete -- now the real journey begins." |
| Technical notes | This is the video's first rest point. Motion must be minimal -- resist the urge to add movement. The calm here makes Drop 2 hit harder. Card shadow: 16px blur, 8% opacity, offset-y 12px -- softer than other scenes. Layer order: gradient background > checkmark echo > card shadow > card. |

---

### SCENE 7: Dashboard Power
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:22.5 -- 0:28.0 |
| Duration | 5.5 seconds (330 frames) |
| Music moment | DROP 2 -- second massive impact. Sustained peak energy, driving beat returns. |
| Screen/visual | 06_home_dashboard.png -- the hero screen. This is the money shot. Displayed in full 3D phone mockup with dramatic perspective: rotateY(-12deg) rotateX(4deg). Phone positioned at 35% from left (off-center for dynamism). Background: charcoal #1A1A1A. A large soft glow behind the phone (mint #34D399 at 15% opacity, 500px radius gaussian). The progress ring from the dashboard (the 10% circle) is echoed as a large animated ring element (300x300px) floating to the right of the phone at 80% from left, 30% from top. This ring animates from 0% to 10% fill over 2 seconds with an animated counter "0%" to "10%" in the center (Plus Jakarta Sans 700, 48px, #34D399). |
| Motion | **0:22.5-0:23.2 (700ms)**: Phone enters from left with velocity (translateX from -800px, rotateY from -30deg to -12deg). Aggressive easing: cubic-bezier(0.16, 1, 0.3, 1). Scale from 1.05x to 1.0x. **0:23.2-0:24.5**: The large progress ring fades in (opacity 0 to 100% over 400ms) and begins its fill animation (0% to 10% arc). Counter increments: 0, 1, 2... 10 (each number holds for 120ms). **0:24.5-0:28.0**: Phone floats with slow drift to the right (+30px over 3.5s). Subtle rotateY shift from -12deg to -8deg (very slow). Progress ring pulses gently at full state. Three small "Quick Tool" icons (generated: simple circle icons for Bank, Credit, Remittance in mint outline style, 48x48px each) fade in staggered below the ring at 0:25.5 (150ms stagger each). |
| Transition in | Hard cut on the Drop 2 beat. The charcoal wipe from Scene 6 completes and phone enters immediately. |
| Transition out | Phone and ring simultaneously translate left (-200px) and fade (100% to 0% opacity) over 400ms. Quick tool icons scatter outward. |
| Text overlay | **"Your financial command center"** -- Plus Jakarta Sans, 700, 44px, #FFFFFF. Positioned at bottom, 88% from top, centered. Enters at 0:24.0, fade-up 400ms. |
| Emotional beat | Power. Control. "This is your cockpit." The animated progress ring with counting numbers creates the Felix-style data animation feel. |
| Technical notes | The progress ring is generated, not extracted from the PNG. Draw it as an SVG arc: stroke #34D399, strokeWidth 8px, radius 140px, strokeLinecap round. Background circle: #333333 at 30% opacity. The counter animation should use tabular (monospace) figures to prevent layout shift. Easing on counter: step timing (discrete jumps, not interpolated). The three Quick Tool icons are simple: circle (48px, 2px stroke #34D399, no fill) with a minimal pictogram inside (bank = columns, credit = chart-line, remittance = arrow-up-right). Layer order: background > glow > phone shadow > phone > ring background > ring fill > counter > tool icons > text. |

---

### SCENE 8: Nova Conversation
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:28.0 -- 0:34.0 |
| Duration | 6.0 seconds (360 frames) |
| Music moment | Drop 2 sustained. Energy still high but slightly less intense than the initial impact. Groove. |
| Screen/visual | 05_chat.png in 3D phone mockup. Phone centered, rotateY(6deg) rotateX(2deg). Background: dark charcoal with a subtle gradient -- slightly lighter (#222222) in the upper-right quadrant where a soft mint glow sits. To the left of the phone (20% from left, 25% from top), a generated chat bubble floats: rounded rectangle (280x auto, 20px radius, #34D399 background), containing typewriter-animated text. To the right of the phone (78% from left, 60% from top), a smaller response bubble (#2A2A2A background, 1px #34D399 border) with its own typewriter text appearing after a delay. |
| Motion | **0:28.0-0:28.8**: Phone slides in from right (translateX +600px to center), rotateY from 20deg to 6deg. cubic-bezier(0.16, 1, 0.3, 1). **0:28.8-0:30.0**: Left chat bubble scales in from 0x to 1.0x (spring, from the phone's left edge as transform origin). **0:30.0-0:32.0**: Typewriter text in left bubble: "How do credit scores work in Canada?" -- 2 characters per frame at 60fps (roughly 60 chars/sec). Cursor blink at end. **0:32.0-0:32.5**: Right bubble scales in from phone's right edge. **0:32.5-0:34.0**: Typewriter text in right bubble: "Great question! Here's what you need to know..." -- same speed. **Throughout**: Phone maintains gentle float (+/- 5px Y, period 4s). |
| Transition in | Crossfade 300ms from Scene 7's exit. Phone enters during the fade. |
| Transition out | Both chat bubbles drift away (left bubble goes further left, right goes further right) while fading. Phone scales down to 0.6x and translates up (-200px) over 500ms -- it "rises and shrinks" as if the camera is pulling back to reveal more. |
| Text overlay | **"Ask Nova anything"** -- Plus Jakarta Sans, 700, 44px, #FFFFFF. Bottom of frame, 88% from top. Enters at 0:29.5, fade-up 400ms. Exits at 0:33.5, fade-down 300ms. |
| Emotional beat | Conversation. Warmth. "You're not alone -- Nova is here to help." The typewriter effect makes it feel live and real. |
| Technical notes | Typewriter implementation: render full text, use a clip-path or character-by-character reveal. The cursor is a 2px wide, 20px tall #FFFFFF rectangle that blinks (opacity 0/100% at 500ms intervals) and advances with each character. Left bubble text: DM Sans 400, 22px, #FFFFFF. Right bubble text: DM Sans 400, 20px, #CCCCCC. The chat bubbles have small tails (8px CSS triangle) pointing toward the phone. Layer order: background > glow > phone shadow > phone > left bubble > right bubble > headline text. |

---

### SCENE 9: Roadmap Journey
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:34.0 -- 0:42.0 |
| Duration | 8.0 seconds (480 frames) |
| Music moment | Drop 2 closing section. Energy gradually decreasing, heading toward the dramatic silence at 0:42. Slight tension building toward the pause. |
| Screen/visual | 08_roadmap.png in 3D phone mockup, centered. Background: dark-to-light vertical gradient transition -- starts charcoal (#1A1A1A) at 0:34.0 and slowly shifts to deep midnight (#0F1419) by 0:42.0, creating a sense of deepening. A vertical "journey line" is generated to the left of the phone (25% from left): a thin line (#34D399, 2px wide) that draws from top to bottom over the scene duration. At intervals along this line, small node circles (12px diameter, #34D399 fill) appear with labels: "SIN Number" (0:35.0), "Bank Account" (0:36.5), "Credit Score" (0:38.0), "Budget" (0:39.5). |
| Motion | **0:34.0-0:35.0**: Phone enters from bottom (translateY +800px to center). rotateX from 15deg to 3deg, rotateY from 0deg to -6deg. cubic-bezier(0.16, 1, 0.3, 1). **0:35.0-0:42.0**: Phone slowly scrolls its content upward internally -- simulate a scroll by translating the screen texture within the phone frame, moving up by ~200px over 7s. This reveals more roadmap steps and creates a "living" feeling. The journey line draws downward at a constant rate (full height over 7s). Each node pops in with a scale spring (0 to 1.0x, 300ms) when the line reaches its Y position. Labels fade-up next to each node (200ms delay after node appears). **0:40.0-0:42.0**: Everything begins to slow down. Phone drift decelerates. Journey line drawing slows. Colors darken. This is the "sunset before night" -- preparing for the silence. |
| Transition in | Phone enters from below as Scene 8 completes. 200ms overlap. |
| Transition out | At 0:41.5, everything begins fading to black. Phone, journey line, nodes all fade opacity to 0% over 500ms. By 0:42.0, the frame is pure black (#0A0A0A). This must be COMPLETE black by 0:42.0 -- the silence must be matched with visual nothingness. |
| Text overlay | **"Step by step"** -- Plus Jakarta Sans, 700, 44px, #FFFFFF at 80% opacity. Top of frame, 8% from top, centered. Enters at 0:35.0, fade-in 500ms. Fades out with everything else at 0:41.5. |
| Emotional beat | Progression. Journey. Structure. "You have a clear path." The drawing line creates anticipation and forward momentum. The gradual darkening creates pre-silence tension. |
| Technical notes | The internal phone scroll is achieved by using the 08_roadmap.png at a larger size than the phone viewport and translating the image upward within a clipping mask. Journey line drawing: animate stroke-dashoffset from full length to 0. Node labels are: DM Sans 500, 18px, #FFFFFF at 70% opacity, positioned 20px to the right of each node circle. The fade to black at the end is CRITICAL -- it must be perfectly synchronized with the music dropping to silence at 0:42.0. Layer order: background > journey line > nodes + labels > phone shadow > phone > title text. |

---

### SCENE 10: The Silence
**Act: PHILOSOPHY**

| Field | Detail |
|-------|--------|
| Timestamp | 0:42.0 -- 0:45.0 |
| Duration | 3.0 seconds (180 frames) |
| Music moment | NEAR SILENCE -- the most dramatic moment in the entire track. Almost no sound. A void. |
| Screen/visual | Complete darkness (#0A0A0A) for the first 1.5 seconds. At 0:43.5, the Credova "C" logo (credova_logo.png) fades in at the exact center of frame, rendered at 180x180px. It glows: a mint radial gradient (#34D399 at 20% opacity, radius 200px) breathes behind it. Below the logo, the tagline materializes. Nothing else. No particles, no cards, no phone. Just the mark and its meaning in the void. |
| Motion | **0:42.0-0:43.5**: Complete stillness. Nothing moves. Nothing appears. The black frame holds for 90 frames. This is intentional negative space -- it lets the silence breathe. **0:43.5-0:44.0 (500ms)**: Logo fades in (opacity 0% to 100%). Scale 0.9x to 1.0x. Easing: cubic-bezier(0.4, 0, 0.2, 1) -- gentle, not aggressive. Glow fades in simultaneously. **0:44.0-0:45.0**: Tagline text appears below logo via fade-up (400ms). Logo holds still. Single gentle glow pulse (20% to 25% to 20% opacity over 1s). |
| Transition in | Already at black from Scene 9's fade-out. No additional transition needed -- the black IS the transition. |
| Transition out | At 0:44.8, the glow behind the logo rapidly intensifies (20% to 60% opacity over 200ms) and expands (200px to 600px radius) -- like an energy buildup. At exactly 0:45.0, this energy "releases" as the background flashes to white (#FFFFFF at 40% opacity overlay, 100ms duration) and Scene 11 begins. |
| Text overlay | **"Your calm, smart guide to money in Canada."** -- Plus Jakarta Sans, 500, 36px, #FFFFFF at 80% opacity, centered below logo (20px gap). Enters at 0:44.0, fade-up 400ms. |
| Emotional beat | This is the emotional center of the video. The silence forces attention. The logo appearing alone in darkness says: "This is what we stand for." It is contemplative, confident, and still. The tagline delivers the mission statement at the moment of maximum audience attention. |
| Technical notes | This scene MUST be perfectly silent visually for its first 1.5s. Do not add any motion, particles, or visual noise during 0:42.0-0:43.5. The power comes from the void. The glow expansion at exit (0:44.8-0:45.0) must sync exactly with the music's recovery beginning. Logo should be rendered at 2x for the small display size to ensure crisp edges. Layer order: background (#0A0A0A solid) > radial glow > logo > tagline text. |

---

### SCENE 11: Tools Arsenal
**Act: SHOWCASE (return)**

| Field | Detail |
|-------|--------|
| Timestamp | 0:45.0 -- 0:50.0 |
| Duration | 5.0 seconds (300 frames) |
| Music moment | Build 3 -- energy recovering from the silence. Growing momentum. Synths returning. |
| Screen/visual | Felix-style card grid on white (#F8FAF9) background. Four tool cards arranged in a 2x2 grid, each extracted/cropped from 09_tools.png or generated to match its visual style. Card 1 (top-left): "Open Bank Account" with bank icon, mint left-border accent. Card 2 (top-right): "Check Credit Score" with chart icon. Card 3 (bottom-left): "Learn Interac" with transfer icon. Card 4 (bottom-right): "Send Money Home" with globe icon. Each card is a rounded rectangle (~240x140px, 16px radius, white fill, 1px #E5E7EB border, subtle shadow). Center of frame: the Credova "C" logo watermark at 400x400px, #34D399 at 4% opacity. |
| Motion | **0:45.0-0:46.5 (1500ms)**: Cards fly in from four corners simultaneously. Card 1 from top-left (translateX -300, translateY -300). Card 2 from top-right (translateX +300, translateY -300). Card 3 from bottom-left (translateX -300, translateY +300). Card 4 from bottom-right (translateX +300, translateY +300). Stagger: 0ms, 80ms, 160ms, 240ms. Each card rotates from ~15deg (random per card) to 0deg. Easing: cubic-bezier(0.16, 1, 0.3, 1). **0:46.5-0:50.0**: Cards float in a slow breathing pattern -- all four simultaneously scale from 1.0x to 1.02x to 1.0x (period 3s). Individual cards have slight independent drift (+/- 3px, different periods). At 0:47.5, each card's left border accent animates from 0px to full height (top to bottom, 400ms stagger between cards) -- a progress-bar style reveal in mint #34D399. |
| Transition in | White flash from Scene 10's glow expansion dissipates over 150ms, revealing the white background. Cards begin flying in immediately. |
| Transition out | Cards converge toward center (all translate to center point), overlapping and scaling down to 0.3x over 400ms. They form a tight cluster that morphs into a single card shape for Scene 12. |
| Text overlay | **"Everything you need"** -- Plus Jakarta Sans, 700, 44px, #1A1A1A. Top of frame, 6% from top. Fade-up at 0:46.0, 400ms. |
| Emotional beat | Comprehensiveness. Capability. "We've got every tool." The four-corner entry creates a sense of abundance and completeness. The building energy of the music matches the tools assembling. |
| Technical notes | Generate the four tool cards rather than cropping from the PNG -- this gives full control over sizing and animation. Each card contains: left color accent bar (4px wide, #34D399), icon (32x32px, mint outline style), title (DM Sans 600, 18px, #1A1A1A), subtitle (DM Sans 400, 14px, #6B7280). Card shadows: 8px blur, 6% opacity, offset-y 4px. The center watermark logo is static and behind everything. Layer order: background > watermark > card shadows > cards (1-4, layered by z-order with slight overlap) > title text. |

---

### SCENE 12: Profile & Progress
**Act: SHOWCASE**

| Field | Detail |
|-------|--------|
| Timestamp | 0:50.0 -- 0:54.0 |
| Duration | 4.0 seconds (240 frames) |
| Music moment | Section B -- medium-high energy. Confident, forward-moving groove. |
| Screen/visual | 10_profile.png in 3D phone mockup, positioned at right-center (65% from left). rotateY(10deg) rotateX(2deg). Background: split -- left 55% is charcoal #1A1A1A, right 45% is white #F8FAF9. The split line is soft (40px gradient). To the left of the phone, three stat counters are stacked vertically (at 20% from left): Counter 1: large "1" with label "Done" below. Counter 2: large "12" with label "Remaining". Counter 3: large "8%" with label "Complete". Each counter number is Plus Jakarta Sans 700, 56px, #34D399. Labels are DM Sans 400, 20px, #FFFFFF at 60%. Counters are animated: they count up from 0 to their final values. |
| Motion | **0:50.0-0:50.8**: Phone slides in from right (translateX +500px to position). rotateY from 25deg to 10deg. cubic-bezier(0.16, 1, 0.3, 1). **0:50.8-0:51.5**: Stat counters appear staggered (200ms apart), each fading up from below (translateY +30px, opacity 0 to 1, 400ms). **0:51.5-0:53.0**: Counter animations play. "Done" counts 0 to 1 (instant). "Remaining" counts 0 to 12 (over 800ms, eased). "Complete" counts 0% to 8% (over 800ms, eased). **0:53.0-0:54.0**: Everything holds. Phone drifts gently. Counters rest at final values with a subtle glow pulse on each number. |
| Transition in | The converging cards from Scene 11 dissolve as the background split wipes in from right over 300ms. Phone enters during this wipe. |
| Transition out | Phone and counters fade out together (opacity 100% to 0%, 300ms). Background transitions: both halves darken to charcoal simultaneously over 300ms. |
| Text overlay | None (the stat counters serve as the text content). |
| Emotional beat | Progress. Accountability. "See how far you've come." The animated counters create the Felix-style data visualization moment. |
| Technical notes | Counter number animation: use a stepped approach for integers (0, 1, 2, 3... 12) and smooth for percentage (0.0%, 0.5%, 1.0%... 8.0%). Numbers should use tabular/monospace figures (Plus Jakarta Sans has these). The split background mirrors Scene 5's split but reversed (dark on left this time) for visual variety. Phone shadow is cast onto the white side of the split only. Layer order: dark background > light background half > phone shadow (on light side only) > counters > counter labels > phone. |

---

### SCENE 13: Tagline Card
**Act: PHILOSOPHY / STAMP**

| Field | Detail |
|-------|--------|
| Timestamp | 0:54.0 -- 0:58.0 |
| Duration | 4.0 seconds (240 frames) |
| Music moment | Section B continuing -- confident, resolved energy. Not the highest peak but strong and steady. |
| Screen/visual | A single large card dominates the frame, directly inspired by the Felix reference's "Juntos We Succeed" card. This is a full-width rounded rectangle (90% frame width, 60% frame height, 32px radius) with charcoal fill (#1A1A1A). Centered on screen with equal margins. Inside the card: the headline in mint, the tagline below, and the logo at the bottom. Background behind card: soft off-white (#F5F5F5) with a faint mint radial glow at center (8% opacity). The card has a subtle animated gradient border: 1px border that shifts between #34D399 and #FF9A8A (peach) over 4 seconds -- a conic gradient that rotates slowly. |
| Motion | **0:54.0-0:55.0 (1000ms)**: Card enters with 3D rotation from the right side: starts at rotateY(-40deg) translateX(+200px) scale(0.85x). Animates to rotateY(0deg) translateX(0) scale(1.0x). Easing: cubic-bezier(0.16, 1, 0.3, 1). This mirrors Felix's "Brand Card 3D Enter" directly. **0:55.0-0:55.5**: Headline text appears via typewriter effect inside the card. **0:55.5-0:56.5**: Tagline text appears via fade-up below the headline. **0:56.5-0:57.5**: Logo fades in at the bottom of the card. **0:57.5-0:58.0**: Card holds with the animated gradient border rotating. Very slight float (+/- 3px Y). |
| Transition in | Crossfade from Scene 12's darkened background. The card begins its 3D rotation entry during the 300ms crossfade. |
| Transition out | Card rotates out to the left: rotateY(30deg) translateX(-300px) scale(0.9x) over 400ms, with opacity fading from 100% to 0% in the last 200ms. Background fades to charcoal. |
| Text overlay (inside card) | Line 1: **"credova.ai"** -- Plus Jakarta Sans, 700, 56px, #34D399. Top section of card, centered. Typewriter reveal. Line 2: **"Your calm, smart guide to money in Canada"** -- DM Sans, 400, 28px, #FFFFFF at 70%. Below headline, centered, max-width 80% of card. Fade-up. Line 3: Credova "C" logo at 80x80px, centered, bottom third of card. Fade-in. |
| Emotional beat | Mission statement. Identity. This is the Felix "philosophy card" moment -- a single frame that communicates what the brand believes. Calm confidence. |
| Technical notes | The rotating gradient border is achieved with a conic-gradient mask that rotates via CSS/shader animation (rotation speed: 90deg/s, so one full rotation over the 4s scene). Gradient stops: 0deg #34D399, 180deg #FF9A8A, 360deg #34D399. Apply to a 1px border with border-radius matching the card. Typewriter speed for headline: 3 chars/frame at 60fps. The 3D card entrance must feel weighty -- it should have a very slight overshoot (rotateY goes to +2deg then settles at 0deg). Layer order: background > card glow > card shadow (20px blur, 15% opacity) > card fill > gradient border > text content > logo. |

---

### SCENE 14: Logo Stamp
**Act: STAMP**

| Field | Detail |
|-------|--------|
| Timestamp | 0:58.0 -- 1:00.0 |
| Duration | 2.0 seconds (120 frames) |
| Music moment | Section B -- still has energy. The video ends here intentionally, leaving the viewer wanting more rather than letting things trail off. |
| Screen/visual | Charcoal background (#1A1A1A). Credova "C" logo centered at 200x200px. Below logo: "credova.ai" wordmark. Below wordmark: small CTA text. Ambient particles return (mint, 15% opacity, drifting upward slowly). A subtle mint glow ring around the logo (outline only, 2px, radius 130px, #34D399 at 40% opacity). |
| Motion | **0:58.0-0:58.6 (600ms)**: Logo pops in with a scale bounce: 0x to 1.1x to 1.0x. Spring physics: damping 0.7, stiffness 200. Simultaneous with a ring that expands from 0px radius to 130px radius (the outline ring drawing on). **0:58.6-0:59.2**: Wordmark fades up below logo (translateY +15px to 0, opacity 0 to 1, 400ms). **0:59.2-0:59.7**: CTA text fades up below wordmark (same animation, 300ms). **0:59.7-1:00.0**: Everything holds perfectly still. Particles drift. The last 3 frames (50ms) very subtly begin a fade: overall opacity drops from 100% to 95% -- suggesting the loop is about to restart (if looped) or the video is ending gracefully. |
| Transition in | Background is already charcoal from Scene 13's exit. Logo enters via spring pop. |
| Transition out | If looping: final frame (1:00.0) crossfades back to Scene 1's opening black void over 500ms (extend to 1:00.5 for loop). If non-looping: hold the final frame for an extra 0.5s then cut to black. |
| Text overlay | Line 1: **"credova.ai"** -- Plus Jakarta Sans, 600, 40px, #FFFFFF. Centered, 20px below logo. Line 2: **"Start your financial journey"** -- DM Sans, 400, 24px, #FFFFFF at 50%. Centered, 12px below wordmark. |
| Emotional beat | Stamp. Closure. Call to action. The final brand impression. Clean, confident, memorable. The logo is the last thing burned into the viewer's retina. |
| Technical notes | The ring draw-on animation: use stroke-dasharray equal to circumference, animate stroke-dashoffset from full to 0. The ring should draw clockwise starting from the top (12 o'clock position). Logo shadow: very subtle, 12px blur, 10% opacity, offset-y 8px. For social media posting, the 1:00.0 mark is the cut point. Render an additional 0.5s of held frame for platform safety margins. Layer order: background > particles > glow ring > logo shadow > logo > wordmark > CTA text. |

---

## Asset Requirements Summary

### Existing Assets (use directly)
| Asset | Used In Scenes | Notes |
|-------|---------------|-------|
| credova_logo.png | 2, 10, 13, 14 | Render at multiple sizes (80px, 180px, 200px, 240px). Ensure 2x quality. |
| 01_welcome.png | 3 | Full screen in phone mockup |
| 03_name_country.png | 4 | Cropped to top 55% (form fields only) |
| 04_usertype.png | 4 | Cropped to selection cards section |
| 05_chat.png | 8 | Full screen in phone mockup |
| 06_home_dashboard.png | 7 | Full screen in phone mockup |
| 07_goals.png | 5 | Full screen in phone mockup |
| 08_roadmap.png | 9 | Full screen in phone mockup, oversized for scroll simulation |
| 09_tools.png | 11 | Reference only -- individual tool cards are generated |
| 10_profile.png | 12 | Full screen in phone mockup |
| 11_success.png | 6 | Displayed as standalone card (no phone frame) |

### Assets NOT Used
| Asset | Reason |
|-------|--------|
| 02_loading.png | A loading screen doesn't add value in a promo video; it interrupts momentum |
| 12_success_alt.png | Identical to 11_success.png visually; redundant |

### Assets to Generate
| Asset | Scene | Specification |
|-------|-------|---------------|
| Phone mockup frame | 3,5,7,8,9,12 | Minimal dark bezel, 2px #333333 border, 24px radius, drop shadow. 9:19.5 aspect ratio interior matching iPhone 15 Pro. |
| Ambient particles | 1,2,14 | 40-60 circles, 0.5-1.5px diameter, #34D399 at 10-15% opacity, random position, upward drift 15-40px/s |
| Horizontal pulse line | 1 | 2px height, #34D399, full frame width, animated expand from center |
| Goal badge pills (x6) | 5 | Auto-width pill shapes, 36px height, #34D399 fill, DM Sans 600 18px white text |
| Progress ring (large) | 7 | SVG arc, 280px diameter, 8px stroke, #34D399, animated 0-10% |
| Quick tool icons (x3) | 7 | 48px circles, 2px stroke #34D399, minimal pictograms |
| Chat bubbles (x2) | 8 | Rounded rectangles with speech tails, see Scene 8 specs |
| Journey line + nodes | 9 | Vertical line #34D399 2px + 4 circle nodes 12px diameter + labels |
| Tool cards (x4) | 11 | Rounded rects with icon, title, subtitle, left accent bar |
| Stat counters (x3) | 12 | Animated number displays with labels |
| Tagline card | 13 | Large charcoal rounded rect with animated gradient border |
| Glow ring | 14 | Circular outline, 260px diameter, 2px stroke #34D399, animated draw-on |

---

## Post-Production Notes

### Audio
- Video uses 0:00.0 -- 1:00.0 of WHATDAHEEE.mp3
- Apply a fade-out from 0:58.0 to 1:00.0 (linear ramp from 100% to 0% volume) so the audio doesn't cut abruptly at 1:00
- No sound effects are added -- the music carries everything

### Color Grading (applied globally in post)
- Shadows lifted +3 toward teal (hue 165)
- Highlights: neutral, no shift
- Vignette: 15% opacity, 70% radius, feather 40%
- Bloom on #34D399 elements: 8px radius, 40% intensity (additive blend)
- Overall: contrast +8%, saturation +5%, slight S-curve on luminance

### Export Specs
- **Master:** 1080x1920, 60fps, H.264, 20Mbps CBR, .mp4
- **Instagram Reels:** 1080x1920, 60fps, H.264, 12Mbps, < 50MB
- **TikTok:** 1080x1920, 60fps, H.264, 10Mbps, < 75MB
- **Twitter/X:** 1080x1920, 30fps (downsampled), 8Mbps
- All exports: AAC audio, 256kbps, stereo

### Loop Behavior
- If posted as a looping reel: extend Scene 14 by 500ms with a crossfade back to Scene 1's black void. The loop point should feel seamless -- the ending mint glow of Scene 14 mirrors the beginning pulse of Scene 1.
- If posted as a non-looping video: hold final frame of Scene 14 for 500ms, then hard-cut to black for 300ms.

---

## Emotional Arc Map

```
Energy
  |
H |                   **         ****                    **
  |                  *  *       *    *                  *  *
  |                 *    *     *      *       ****     *    *
M |                *      *   *        *     *    *   *      *
  |               *        * *          *   *      * *        *
  |              *          *            * *        *          *
L |   ***       *                        *                     *
  |  *   *     *                                                *
  | *     *   *                                                  *
0 |*       ***                                                    *
  +----+----+----+----+----+----+----+----+----+----+----+----+----
   0:00  0:05  0:10  0:15  0:20  0:25  0:30  0:35  0:40  0:45  0:50  0:55  1:00
   Sc1  Sc2   Sc3   Sc4   Sc5   Sc6   Sc7         Sc9   Sc10  Sc11  Sc12  Sc14
                                                          ^^^^
                                                        SILENCE
```

**Act I -- HOOK (0:00-0:06.5):** Mystery to recognition. Dark, minimal, logo-centric.
**Act II -- SHOWCASE (0:06.5-0:42.0):** Full product tour. Alternating light/dark backgrounds. Peak energy.
**Act III -- PHILOSOPHY (0:42.0-0:50.0):** Silence, then recovery. Brand meaning. Tagline delivery.
**Act IV -- STAMP (0:50.0-1:00.0):** Return to showcase briefly, then seal with brand card and logo.

---

*End of Storyboard v1.0*
