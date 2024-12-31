const toggleTheme = (e) => {
    if (e.target.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
};

const Theme = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default Theme;