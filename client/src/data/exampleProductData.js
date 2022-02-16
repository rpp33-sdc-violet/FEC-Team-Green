const exampleProductData = [
  {
    // exmaple style data is for this id
    'id': 64620,
    'campus': 'hr-rpp',
    'name': 'Camo Onesie',
    'slogan': 'Blend in to your crowd',
    'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    'category': 'Jackets',
    'default_price': '140.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64621,
    'campus': 'hr-rpp',
    'name': 'Bright Future Sunglasses',
    'slogan': 'You\'ve got to wear shades',
    'description': 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
    'category': 'Accessories',
    'default_price': '69.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64622,
    'campus': 'hr-rpp',
    'name': 'Morning Joggers',
    'slogan': 'Make yourself a morning person',
    'description': 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
    'category': 'Pants',
    'default_price': '40.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64623,
    'campus': 'hr-rpp',
    'name': 'Slacker\'s Slacks',
    'slogan': 'Comfortable for everything, or nothing',
    'description': 'I\'ll tell you how great they are after I nap for a bit.',
    'category': 'Pants',
    'default_price': '65.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64624,
    'campus': 'hr-rpp',
    'name': 'Heir Force Ones',
    'slogan': 'A sneaker dynasty',
    'description': 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
    'category': 'Kicks',
    'default_price': '99.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64625,
    'campus': 'hr-rpp',
    'name': 'Pumped Up Kicks',
    'slogan': 'Faster than a just about anything',
    'description': 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
    'category': 'Kicks',
    'default_price': '89.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64626,
    'campus': 'hr-rpp',
    'name': 'Blues Suede Shoes',
    'slogan': '2019 Stanley Cup Limited Edition',
    'description': 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    'category': 'Dress Shoes',
    'default_price': '120.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64627,
    'campus': 'hr-rpp',
    'name': 'YEasy 350',
    'slogan': 'Just jumped over jumpman',
    'description': 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    'category': 'Kicks',
    'default_price': '450.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64628,
    'campus': 'hr-rpp',
    'name': 'Summer Shoes',
    'slogan': 'A risky call in the spring or fall',
    'description': 'Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.',
    'category': 'Kicks',
    'default_price': '59.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64629,
    'campus': 'hr-rpp',
    'name': 'Infinity Stone',
    'slogan': 'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
    'description': 'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
    'category': 'Accessories',
    'default_price': '50000000.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64630,
    'campus': 'hr-rpp',
    'name': 'Air Minis 250',
    'slogan': 'Full court support',
    'description': 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    'category': 'Basketball Shoes',
    'default_price': '49.00',
    'created_at': '2022-01-28T00:20:03.466Z',
    'updated_at': '2022-01-28T00:20:03.466Z'
  },
  {
    'id': 64631,
    'campus': 'hr-rpp',
    'name': 'Mattie 700 Boots',
    'slogan': 'Officiis molestiae necessitatibus voluptatem assumenda laborum.',
    'description': 'Magni et in officiis. Exercitationem sit optio suscipit deleniti voluptatem fugit distinctio. Accusantium porro fuga voluptates qui qui est esse. Sed hic nemo doloribus dolores consequatur sed accusantium id. Omnis distinctio rerum qui voluptatibus suscipit reiciendis.',
    'category': 'Boots',
    'default_price': '268.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64632,
    'campus': 'hr-rpp',
    'name': 'Cleve Dress',
    'slogan': 'Ea et perspiciatis voluptas tenetur.',
    'description': 'Laborum et esse possimus. Ab cum quia aspernatur. Dignissimos sit in aut sint suscipit et et nam. Et officia sunt accusamus dolore. Deleniti omnis quo.',
    'category': 'Dress',
    'default_price': '722.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64633,
    'campus': 'hr-rpp',
    'name': 'Ceasar Socks',
    'slogan': 'Et ex et est est corporis delectus.',
    'description': 'Magni sunt ad occaecati harum dolore. Ut officia rerum est excepturi. At rerum maiores occaecati qui. In est magnam ut doloremque amet quisquam corrupti facere. Illum optio veniam iusto est.',
    'category': 'Socks',
    'default_price': '607.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64634,
    'campus': 'hr-rpp',
    'name': 'Carroll Sunglasses',
    'slogan': 'Omnis amet ipsa.',
    'description': 'Quis qui perferendis deserunt veritatis aut esse assumenda non. Ipsam quibusdam rerum laudantium corrupti mollitia consequatur qui repellendus. Eligendi dolor dolorum similique quis alias cumque. Aspernatur et autem nam facilis porro dolores quidem ullam.',
    'category': 'Sunglasses',
    'default_price': '369.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64635,
    'campus': 'hr-rpp',
    'name': 'Jany Sunglasses',
    'slogan': 'Quisquam explicabo culpa ipsa et.',
    'description': 'Iste dolor fugiat blanditiis voluptate asperiores est blanditiis sunt. Illum porro deserunt dolor. Veniam velit nemo natus provident nemo perferendis architecto et.',
    'category': 'Sunglasses',
    'default_price': '735.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64636,
    'campus': 'hr-rpp',
    'name': 'Tommie Jacket',
    'slogan': 'Molestias nulla perspiciatis incidunt accusamus numquam qui.',
    'description': 'Dolorem eligendi iste. Molestiae eius tenetur. Aut consequatur minima. Voluptatibus temporibus deleniti ea. Sit veritatis sint rerum quod tempora sit.',
    'category': 'Jacket',
    'default_price': '245.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64637,
    'campus': 'hr-rpp',
    'name': 'Jessica Shirt',
    'slogan': 'Provident modi rem.',
    'description': 'Consequatur alias adipisci eum neque voluptatem. Quia et nemo sed consequatur id impedit ab rem. Blanditiis adipisci voluptatibus molestiae quo recusandae perspiciatis quisquam delectus.',
    'category': 'Shirt',
    'default_price': '502.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64638,
    'campus': 'hr-rpp',
    'name': 'Cedrick Heels',
    'slogan': 'Ipsum sit voluptatum in ipsum omnis ut et voluptatum officiis.',
    'description': 'Reprehenderit assumenda occaecati reprehenderit qui. Voluptas nam et temporibus consequatur dolorem. Ut consequatur dicta.',
    'category': 'Heels',
    'default_price': '890.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  },
  {
    'id': 64639,
    'campus': 'hr-rpp',
    'name': 'Marisol Sweatpants',
    'slogan': 'Rerum quisquam eligendi vero ullam earum id ut et.',
    'description': 'Ut sapiente porro velit. Maiores eius omnis est mollitia commodi. Non velit corrupti officiis. In quia velit laborum cum voluptatibus consequuntur iste. Non impedit sint dolorem totam.',
    'category': 'Sweatpants',
    'default_price': '354.00',
    'created_at': '2022-01-28T00:20:03.651Z',
    'updated_at': '2022-01-28T00:20:03.651Z'
  }
];

export default exampleProductData;