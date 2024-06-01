import "./ProfileHeader.css";
import PropTypes from "prop-types";
import Image from "next/image";
import ifNotSimp from "./ProfileIcon/homer-simpson.jpg";

const ProfileHeader = ({ imageUrl, name, bio, linkedinUrl }) => {
  // const defaultImageUrl = "/src/components/ProfileHeader/ProfileIcon/kirby.png";
  return (
    <div className=" sm:max-w-md ">
      <div className="w-full flex justify-start">
        <Image
          className="rounded-full mb-5 object-cover border-3 border-white"
          src={imageUrl || ifNotSimp}
          alt="Image Not Found"
          width={64}
          height={64}
        />
      </div>

      <h1 className="text-4xl text-gray-900  text-justify font-roboto break-words ">{name}</h1>
      <p className=" text-base  text-gray-600 text-justify">{bio}</p>
      <div className="flex justify-center mt-5">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <i ></i>
          {/*review this cuz not sure*/}
        </a>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
};

export default ProfileHeader;
