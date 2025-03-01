
export default function Navigation({nav}: { nav: any[] }){

    return (
        <>
          <div className="hidden lg:flex lg:gap-x-12">
            {nav.map((item: any) => (
              <a key={item.name} href={item.href} className="text-sm/8 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </>
    )
}