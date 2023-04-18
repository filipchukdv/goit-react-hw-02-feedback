import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={css.section}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
