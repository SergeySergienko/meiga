export const TabButton = ({ title, activeTab, toggleTab }) => {
  return (
    <button
      className={`w-1/2 py-2 text-center font-semibold ${
        activeTab === title
          ? 'border-b-2 border-purple-500 text-purple-500'
          : 'text-gray-400 hover:text-purple-100'
      }`}
      onClick={() => toggleTab(title)}
    >
      {title}
    </button>
  );
};
