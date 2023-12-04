import Link from 'next/link';
import Heading from '@/components/Heading';

export default function ReviewsPage() {
    return (
        <>
        <Heading>Reviews</Heading >
        <p>List Reviews</p>
        <ul className="flex flex-col gap-3">
            <li className='border w-80 bg-white rounded shadow hover:shadow-xl'>
                <Link href="/reviews/hollow-knight">
                    <img src='/images/hollow-knight.jpg' alt='' width="320" height='180' className="rounded-t" />
                    <h2 className='text-center py-1 font-semibold font-orbitron'> 
                    Hollow Knight
                    </h2>
                    </Link>
            </li>
            <li className='border w-80 bg-white rounded shadow hover:shadow-xl'>
                <Link href="/reviews/stardew-valley">
                    <img src='/images/stardew-valley.jpg' alt='' width="320" height='180' className="rounded-t" />
                    <h2 className='text-center py-1 font-semibold font-orbitron'> 
                    Stardew Valley
                    </h2>
                    </Link>
            </li>
        </ul>    
        </>
    )
}