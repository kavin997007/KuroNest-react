import fs from 'fs';
import path from 'path';

const cities = [
  'Miami, FL', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 
  'Seattle, WA', 'Denver, CO', 'San Francisco, CA', 'Austin, TX', 
  'Boston, MA', 'Las Vegas, NV'
];

const types = ['Villa', 'Apartment', 'House', 'Penthouse', 'Townhouse'];

const unsplashImages = [
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
];

const amenitiesList = [
  'Swimming Pool', 'Smart Home System', 'Private Dock', 'Home Theater', 
  'Wine Cellar', 'Gated Community', 'Outdoor Kitchen', 'Rooftop Access', 
  'Concierge Service', 'Fitness Center', 'Fireplace', 'Garage (2 Cars)', 
  'Hardwood Floors', 'Finished Basement', 'Central A/C', 'Solar Panels'
];

const agents = [
  {
    name: 'Sarah Jenkins',
    phone: '+1 (305) 555-0199',
    email: 'sarah.j@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Marcus Vance',
    phone: '+1 (212) 555-0142',
    email: 'marcus.v@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Elena Rostova',
    phone: '+1 (206) 555-0188',
    email: 'elena.r@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

const adjectives = ['Stunning', 'Modern', 'Cozy', 'Elegant', 'Luxurious', 'Scenic', 'Charming', 'Sleek', 'Grand', 'Peaceful'];
const nouns = ['Retreat', 'Haven', 'Manor', 'Residence', 'Lodge', 'Sanctuary', 'Palace', 'Pinnacle', 'Oasis', 'Estate'];

const generateProperties = () => {
  const properties = [];
  
  for (let i = 1; i <= 100; i++) {
    const id = `prop-${i}`;
    const type = types[Math.floor(Math.random() * types.length)];
    const location = cities[Math.floor(Math.random() * cities.length)];
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const title = `${adj} ${type === 'Penthouse' ? 'Sky' : ''} ${type} ${noun}`;
    
    // Price range based on type
    let price = 300000 + Math.floor(Math.random() * 500000); // Base House/Apartment
    if (type === 'Villa') price = 1500000 + Math.floor(Math.random() * 2000000);
    if (type === 'Penthouse') price = 2000000 + Math.floor(Math.random() * 3000000);
    if (type === 'Townhouse') price = 800000 + Math.floor(Math.random() * 800000);
    
    const bedrooms = type === 'Apartment' ? 1 + Math.floor(Math.random() * 3) : 3 + Math.floor(Math.random() * 4);
    const bathrooms = Math.max(1, bedrooms - (Math.random() > 0.5 ? 1 : 0)) + (Math.random() > 0.7 ? 0.5 : 0);
    
    const area = bedrooms * (400 + Math.floor(Math.random() * 300));
    
    // Dynamic description
    const description = `This ${title.toLowerCase()} is situated in the highly sought-after area of ${location}. Built with precision and boasting top-of-the-line architectural finishes, it offers a perfect combination of style, comfort, and convenience. Enjoy scenic views, spacious living areas, and close proximity to local amenities.`;
    
    // Choose 5-8 random unique amenities
    const shuffledAmenities = [...amenitiesList].sort(() => 0.5 - Math.random());
    const amenities = shuffledAmenities.slice(0, 5 + Math.floor(Math.random() * 4));
    
    // Agent
    const contact = agents[Math.floor(Math.random() * agents.length)];
    
    // Images (Pick 3 unique images)
    const shuffledImages = [...unsplashImages].sort(() => 0.5 - Math.random());
    const images = shuffledImages.slice(0, 3);
    
    const featured = i <= 10 || Math.random() > 0.85;

    properties.push({
      id,
      title,
      type,
      location,
      price,
      images,
      bedrooms,
      bathrooms,
      area,
      description,
      amenities,
      contact,
      featured
    });
  }
  
  return { properties };
};

const data = generateProperties();
const targetPath = path.resolve('db.json');
fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
console.log(`Generated 100 properties inside db.json successfully.`);
