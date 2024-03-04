
//Array of Object
let states = [
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/city/041.webp',
        'name': 'San Franciso',
        'description': 'Perched on the hills overlooking the glistening waters of the Bay, San Francisco enchants with its picturesque beauty, iconic landmarks, and bohemian spirit.'
    },
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/city/043.webp',
        'name': 'New York',
        'description':'Known as the "Big Apple," New York City is a vibrant metropolis bursting with energy, diversity, and iconic landmarks. '
    },
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
        'name': 'London',
        'description':'Steeped in history and brimming with modern charm, London is a city of contrasts, where ancient landmarks stand alongside cutting-edge architecture.'
    },
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
        'name': 'Los Angeles',
        'description':'Nestled between sun-kissed beaches and sprawling hills, Los Angeles beckons with its promise of fame, fortune, and eternal sunshine.'
    },
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
        'name': 'Bali',
        'description':'It is an Indonesian island known for its lush landscapes, stunning beaches, and vibrant culture. However, within Bali, there are several cities and towns, with Denpasar being the largest and the capital city of Bali province.'
    },
    {
        'image': 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
        'name': 'Sdyney',
        'description':'Sydney, the capital city of New South Wales, Australia, is a vibrant metropolis renowned for its iconic landmarks, stunning harbor, and diverse cultural scene.'
    },
    {
        'image': 'https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp',
        'name': 'Rio de Janeiro',
        'description':'Rio de Janeiro, often simply referred to as Rio, is famous for its stunning beaches, vibrant culture, and iconic landmarks such as Christ the Redeemer statue atop Corcovado Mountain and the Sugarloaf Mountain.'
    },
    {
        'image': 'https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp',
        'name': 'Moscow',
        'description':'It serves as the countrys capital and is renowned for its rich history, iconic architecture, and cultural significance.'
    },

]
let SECTION = document.querySelector('section')
states.map(state => {
    SECTION.innerHTML += `     
    <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src=${state.image}
        alt="Picture of The State" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        ${state.name}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        ${state.description}
      </p>
    </div>
  </div>

  </div>

    `
})