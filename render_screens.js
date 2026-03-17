const { chromium } = require('playwright');
const path = require('path');

const SCENES_DIR = '/Users/faresalmubaied/Downloads/credova-nextjs/:scenes';
const OUTPUT_DIR = '/Users/faresalmubaied/Downloads/credova-nextjs/.claude/worktrees/happy-joliot/video-production/assets/screens';

const screens = [
  { file: 'credova_welcome_screen.html', name: '01_welcome.png' },
  { file: 'credova_loading_screen.html', name: '02_loading.png' },
  { file: 'credova_name_country_screen.html', name: '03_name_country.png' },
  { file: 'credova_usertype_screen.html', name: '04_usertype.png' },
  { file: 'credova_chat_screen.html', name: '05_chat.png' },
  { file: 'credova_home_dashboard.html', name: '06_home_dashboard.png' },
  { file: 'credova_goals_screen.html', name: '07_goals.png' },
  { file: 'credova_roadmap_screen.html', name: '08_roadmap.png' },
  { file: 'credova_tools_screen.html', name: '09_tools.png' },
  { file: 'credova_profile_screen.html', name: '10_profile.png' },
  { file: 'credova_success_screen.html', name: '11_success.png' },
  { file: 'credova_success_screen (1).html', name: '12_success_alt.png' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 500, height: 920 },
    deviceScaleFactor: 3,
  });

  for (const screen of screens) {
    const page = await context.newPage();
    const filePath = path.join(SCENES_DIR, screen.file);
    const fileUrl = 'file://' + filePath;

    await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 15000 });
    // Wait for fonts to load
    await page.waitForTimeout(1500);

    // Screenshot just the .phone element for a clean crop
    const phone = await page.$('.phone');
    if (phone) {
      await phone.screenshot({
        path: path.join(OUTPUT_DIR, screen.name),
        type: 'png',
      });
      console.log(`OK: ${screen.name}`);
    } else {
      // Fallback: screenshot full page
      await page.screenshot({
        path: path.join(OUTPUT_DIR, screen.name),
        type: 'png',
        fullPage: false,
      });
      console.log(`OK (fullpage fallback): ${screen.name}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('Done - all screens rendered.');
})();
