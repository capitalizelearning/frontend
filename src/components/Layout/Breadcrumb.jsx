/* eslint-disable react/prop-types */

const Breadcrumb = ({ items }) => {
  return (
    <ul className="flex space-x-2 rtl:space-x-reverse">
      {items.map((item, index) => (
        <li key={index} className={index !== 0 ? "before:content-['/'] ltr:before:mr-1 rtl:before:ml-1" : ""}>
          {typeof item === 'string' ? (
            <span>{item}</span>
          ) : (
            <a href={item.link} className="text-primary hover:underline">{item.label}</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
