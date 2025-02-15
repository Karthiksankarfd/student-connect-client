import React from 'react';
import { useNavigate } from 'react-router-dom';

const PeopleCategoryListCard = ({...person}) => {
  const navigate = useNavigate();

  const setQueryAndParam = (category, docId) => {
    // Update the URL query parameters
    navigate(`/stntcnthome/view_user_profile?category=${category}&_id=${docId}`);
  };

  return (
    <div className="PeopleCategoryListCard p-3 dark:bg-black dark:text-white text-black bg-white w-full" onClick={() => setQueryAndParam(person.doctype, person._id)}>
      <div className="flex justify-start gap-3">
        <img
          src={person?.profilePhotoUrl || person?.profileImage || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"}
          alt="profilephoto"
          className="h-14 w-14 rounded-full object-cover aspect-square"
        />
        <div className="PeopleCategoryListCard-detail w-full">
          <h4 className="text-blue-500 font-semibold">{person?.name.toUpperCase() || "no name"}</h4>
          <p>{person?.about}</p>
          <p className="text-sm font-light"><span>{person?.location?.state }</span> <span>{person?.location?.country }</span></p>
          <hr className="flex-grow"/>
        </div>
      </div>
    </div>
  );
};

export default PeopleCategoryListCard;
