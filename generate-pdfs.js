const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDFs() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Generate CV PDF
  console.log('Generating CV PDF...');
  const cvPath = path.join(__dirname, 'public', 'Muhammad_Umar_Farooq_CV.html');
  await page.goto(`file://${cvPath}`, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'public/umar_cv.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm'
    }
  });
  
  console.log('CV PDF generated successfully: public/umar_cv.pdf');
  
  // Generate Resume PDF
  console.log('Generating Resume PDF...');
  const resumePath = path.join(__dirname, 'public', 'Muhammad_Umar_Farooq_Resume.html');
  await page.goto(`file://${resumePath}`, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'public/Muhammad_Umar_Farooq_Resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm'
    }
  });
  
  console.log('Resume PDF generated successfully: public/Muhammad_Umar_Farooq_Resume.pdf');
  
  await browser.close();
  console.log('All PDFs generated successfully!');
}

generatePDFs().catch(console.error);
