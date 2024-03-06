import React from 'react';

const TeamCard = ({ photo, name, Designation }) => {
    return (
        <div className='flex flex-col items-center p-5 space-y-5 bg-blue-100 rounded-md mt-5 md:flex-row md:space-y-0 md:space-x-5'>
            <div className='w-full  text-center font-bold'>
                <img src={photo} alt={name} className=" max-auto sm:w-1/6  " style={{ margin: 'auto', width: '150px' }} />
                <h2 >{name}</h2>
                <p>{Designation}</p>
            </div>
            <div className='lg:p-10 p-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus, recusandae expedita veritatis dolor provident velit odio asperiores molestiae illum sunt voluptas quas enim ipsa voluptate dolores tenetur facere, deserunt ut? Officia nesciunt debitis eaque dolores omnis. Sunt cupiditate eos eveniet a delectus nihil inventore, ex quibusdam minus. Dicta odio ab sit reprehenderit accusamus veniam pariatur placeat ducimus mollitia aspernatur fuga aliquid nihil non consequatur, fugiat vel consectetur, corrupti impedit?
            </div>
        </div>
    );
}

export default TeamCard;
