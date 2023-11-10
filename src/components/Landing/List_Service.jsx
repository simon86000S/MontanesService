const callouts = [


    {
      name: 'Lavage de sol et vitre',
      description: 'package nettoyage vitre+sol avec des produits ecologique professionnelle.',
      imageSrc: 'https://img.freepik.com/photos-gratuite/still-life-outils-nettoyage_23-2150552310.jpg?w=1060&t=st=1699636152~exp=1699636752~hmac=57f4c012977b4166754d45d7582e832e2cd0609a14049ffa3f61a2f3989ad567',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      price:50,
      href: '#',
    },
    {
      name: 'lavage de vitre',
      description: 'Lavage de vitre à la française',
      imageSrc: 'https://img.freepik.com/photos-gratuite/main-gant-caoutchouc-nettoyant-fenetre_23-2148529595.jpg?w=740&t=st=1699636209~exp=1699636809~hmac=99dfced89d9316724dfaa47430852e3a46d333b37267912e29c1508c452cda07',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      price:30,
      href: '#',
    },
    {
      name: 'Lavage de sol',
      description: 'Nettoyage de sol au karcher ou à la serpiére suivant le type de sol',
      imageSrc: 'https://img.freepik.com/photos-gratuite/personne-homme-affaires-debout-interieur-usine-generee-par-ia_24640-99794.jpg?w=1380&t=st=1699636408~exp=1699637008~hmac=d9b5bc07b7a30e05f69b9e81a4e2ce169d98db27d9b4947f73b883774695acab',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      price:25,
      href: '#',
    },
  ]
  
  export default function List_service() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description} </p>
                  {callout.price} euros/heures
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }