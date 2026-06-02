import "./SkillsWidget.css";
import PropTypes from "prop-types";
import Image from "next/image";
import Bolt from "../SkillsWidget/SkillsLogo/Bolt.svg";
/* TODO:
  Fill out this component according to the README.
*/

const getMonogram = (name = "") => {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, " ").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const SkillsWidget = ({ title, content, skills }) => {
  return (
    //Write your code here
    <section data-testid="skillsWidget" className="skills-widget sm:max-w-sm dark:border-2 border-zinc-700">
      <h2 data-testid="skillsWidgetTitle" className="dark:text-white"><Image src={Bolt} alt="arrow Icon" width={30} height={30} />{title}</h2>
      <p data-testid="skillsWidgetContent">{content}</p>

      <ul>
        {skills.map((item, index) => (
          <li data-testid={"skillsWidgetItem" + index} key={"item" + index}>
            <div className="skills-item">
            {item.icon ? (
              <Image className="rounded-full dark:bg-zinc-700/40" src={item.icon} alt={`Item ${index} ${item.name}`} width={48} height={48} />
            ) : (
              <span
                className="rounded-full bg-zinc-200 dark:bg-zinc-700/40 dark:text-white flex items-center justify-center font-semibold"
                style={{ width: 48, height: 48, fontSize: 14 }}
                aria-hidden="true"
              >
                {getMonogram(item.name)}
              </span>
            )}
              <div className="skills-item-content">
                <h3 className="dark:text-white" data-testid={"skillsWidgetItemName" + index}>{item.name}</h3>
                <div className="dark:bg-zinc-700/40 skills-item-proficiency ">
                  <div
                    data-testid={"skillsWidgetItemProficiency" + index}
                    className=" proficiency-bar"
                    style={{ width: `${item.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

//<progress value={`${item.proficiency}%`} />

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
