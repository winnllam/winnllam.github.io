function Buttons() {
  const resumeUrl =
    "https://drive.google.com/file/d/1FO4ty81THO92dGWc4gBToEf70l2ZW55Y/view?usp=sharing";
  return (
    <div className="container flex justify-center">
      <a href={resumeUrl} target="_blank" rel="noreferrer">
        <button className="btn btn-orchid m-2">Resume</button>
      </a>
      <button className="btn btn-orchid-outline m-2">Contact</button>
    </div>
  );
}

export default Buttons;
