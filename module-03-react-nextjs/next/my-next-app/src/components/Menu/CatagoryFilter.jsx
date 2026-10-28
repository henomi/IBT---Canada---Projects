import Link from 'next/link';


function CatagoryFilter({ categories }) {
    return (
        
        <nav className="flex flex-col gap-2">
            {categories.map((category) => (
                <Link key={category} href={category === 'All' ? '/menu' : `/menu?category=${category}`} className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-[#39ff88]/20 hover:bg-[#39ff88]/5 hover:text-[#39ff88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88]">
                    {category}
                </Link>
            ))}
        
        </nav>
    );}

    export default CatagoryFilter;