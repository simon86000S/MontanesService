import Button_Contact from "../Header/Button_Contact"

  
  export default function List_service({name,imageSrc,imageAlt,lienList,price,desc}) {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
  
            <div className="mt-6 space-y-12  lg:flex lg:flex-row lg:w-full lg:justify-center">
              
                <div key={name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-base text-gray-900 font-bold uppercase">
                    <a  href={lienList}>
                      <span className="absolute inset-0 " />
                      {name}
                    </a>
                  </h3>
                  <p className="  text-gray-500">{desc} </p>
                  <div className="text-gray-400">{price} euros/heures</div>
                  
                  <Button_Contact title='Contactez-nous' lien='/Contact'/>
                </div>
           
            </div>
          </div>
        </div>
      </div>
    )
  }