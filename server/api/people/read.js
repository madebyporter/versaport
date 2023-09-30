import prisma from '~/lib/prisma';

export default async function handler(req, res) {
  try {
    const { data, error } = useFetch(async () => {
      console.log('Before fetching data...');
      const people = await prisma.person.findMany();
      console.log('Data fetched:', people);
      return people;
    });

    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
