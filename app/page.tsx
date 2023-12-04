import Link from 'next/link';
import Heading from '@/components/Heading';

export default function HomePage() {
    return (
        <>
            <Heading >next I js</Heading>
            <p className="pb-3">test</p>
            <div className='border bg-white rounded shadow hover:shadow-xl w-80 sm:w-full'>
                <Link href="/reviews/hollow-knight"
                className = "flex flex-col sm:flex-row">
                    <img src='/images/hollow-knight.jpg' alt='' width="320" height='180' className="rounded-t sm:rounded-l sm:rounded-r-none" />
                    <h2 className='text-center py-1 font-semibold font-orbitron sm:px-2'> 
                    Hollow Knight
                    </h2>
                    </Link>
            </div>
        </>
    )
}