import './WorkWidget.css';
import Image from "next/image";
import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section className="work-widget" data-testid="workWidget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((item, index) => (
          <li data-testid={'workWidgetItem' + index} key={'item' + index}>
            <div className="work-item">
              <Image data-testid={'workWidgetItemLogo' + index} src={item.logo} alt={`${item.organization} Logo`} width={40} height={40}/>

              <div className="work-item-content">
                <h3 data-testid={'workWidgetItemTitle' + index}>{item.organization}</h3>
                <div className="work-item-content-details">
                  <p data-testid={'workWidgetItemContent' + index}>{item.jobTitle}</p>
                  <span data-testid={'workWidgetItemDates' + index}>
                    {item.startYear + ' - ' + (item.endYear === null ? 'current' : item.endYear)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
