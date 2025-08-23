const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'Ahmad_Faraz_CV.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Generate PDF
  await page.pdf({
    path: 'Ahmad_Faraz_CV.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm'
    }
  });
  
  console.log('PDF generated successfully: Ahmad_Faraz_CV.pdf');
  await browser.close();
}

generatePDF().catch(console.error);
