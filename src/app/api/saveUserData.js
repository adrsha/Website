import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const filePath = path.join(process.cwd(), 'data', 'userData.json');
      
      // Read existing data
      let existingData = [];
      try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        existingData = JSON.parse(fileContent);
      } catch (error) {
        console.error('Error reading existing data:', error);
        // File doesn't exist or is empty, start with an empty array
      }

      // Add new data
      existingData.push(data);

      // Write updated data back to file
      await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data: ' + error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}