/* eslint-disable react/prop-types */
// Topbar.js

const Topbar = ({ isDarkMode }) => {
  const topbarClasses = `h-16 bg-${isDarkMode ? 'gray-800' : 'gray-200'} text-white`;

  return (
    <div className={topbarClasses}>
      <div className="p-4">Topbar Content</div>
    </div>
  );
};

export default Topbar;
