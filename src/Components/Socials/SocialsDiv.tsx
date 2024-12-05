import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-[59px] my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/md-fahad-hosen-bb3637278/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Fahad-Hosen">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/FahadHosendev/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/fahadhosendev/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialsDiv;
