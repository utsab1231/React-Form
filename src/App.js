import { useState } from "react";

function App() {
  const [darkMode,setDarkMode]=useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Nepal",
    city: "",
    Address: "",
    province: "",
    zipcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotificaitons: "",
  });

  function handleChange(event) {
    
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    
  }
  function handleMode(){
    setDarkMode(prevMode=>!prevMode);
  }
  return (
    <>
    <div className={`flex justify-between py-5 px-24 ${darkMode?"bg-black text-white":""}`}>
      <h1 className="line-through text-xl">Utsab Adhikari</h1>
      <button className="border-4 border-aqua-700 rounded-md p-4 shadow-lg hover:shadow-gray-100" onClick={handleMode}>Switch Mode <i class="ri-lightbulb-fill"></i></button>
    </div>
    <div className={`flex flex-col items-center pt-3 ${darkMode?"bg-black text-white":""}`}>
      <form onSubmit={submitHandler} className="w-1/2 p-8" >
        <label className="font-medium"     htmlFor="firstName">First Name</label>
        <br />

        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        
          id="firstName"
        />
        <br />
        <br />
        <label className="font-medium" htmlFor="lastName">Last Name</label>
        <br />

        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          
          id="lastName"
        />
        <br />
        <br />

        <label className="font-medium" htmlFor="email">Email</label>
        <br />
        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          
          id="email"
        />
        <br />
        <br />

        <label className="font-medium" htmlFor="country">Country</label>
        <br />
        <select 
          id="country"
          name="country"
          onChange={handleChange}
          value={formData.country}
          className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
        >
          <option>Nepal</option>
          <option>Bhutan</option>
          <option>Srilanka</option>
          <option>Maldives</option>
        </select>

        <br />
        <br />

        <label className="font-medium" htmlFor="city">city</label>
        <br />
        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="city"
          value={formData.city}
          onChange={handleChange}
          
          id="city"
        />
        <br />
        <br />

        <label className="font-medium" htmlFor="Address">Email</label>
        <br />
        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          
          id="Address"
        />
        <br />
        <br />

        <label className="font-medium" htmlFor="province">Province</label>
        <br />
        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="province"
          value={formData.province}
          onChange={handleChange}
          
          id="province"
        />
        <br />
        <br />

        <label className="font-medium" htmlFor="zipcode">Postal/Zip Code</label>
        <br />
        <input
          type="text" className={`border-2 border-blue active:border-black w-full p-3 rounded-md ${darkMode?"bg-slate-700 text-white":""}`}
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          
          id="zipcode"
        />
        <br />
        <br />

        <fieldset>
          <legend className="font-bold my-4">By Email</legend>
          <input
            onChange={handleChange}
            type="checkbox"
            name="comments"
            id="comments"
          />
          <label className="font-medium ml-3" htmlFor="comments" >
            Comments
            <p className="text-gray-500 ml-6 text-sm">
              Get notified when someone post a comments
            </p>
          </label>
          <br />
          <input
            onChange={handleChange}
            type="checkbox"
            name="candidates"
            id="candidates"
          />
          <label className="font-medium ml-3" htmlFor="candidates" >
            Candidates
            <p className="text-gray-500 ml-6 text-sm">
              Get notified when candidates applies for a job
            </p>
          </label>
          <br />

          <input
            onChange={handleChange}
            type="checkbox"
            name="offers"
            id="offers"
            value={formData.offers}
          />
          <label className="font-medium ml-3" htmlFor="offers" >
            Comments
            <p className="text-gray-500 ml-6 text-sm">
              Get notified when candidates accepts or rejects offer
            </p>
          </label>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="font-bold " >Push Notification</legend>
          <p className="mb-2 text-gray-500 text-sm">These are delivered via sms to your phone</p>

          <input
            type="radio"
            id="pushEverythin"
            name="pushNotificaitons"
            onChange={handleChange}
            value="Everything"
          />
          <label className="font-medium ml-3"  htmlFor="pushNotificaitons">
            Everything
          </label>
          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotificaitons"
            onChange={handleChange}
            value="email"
          />
          <label className="font-medium ml-3"  htmlFor="pushEmail">
            Same as Email
          </label>
          <br />
          <input
            type="radio"
            id="pushNone"
            name="pushNotificaitons"
            onChange={handleChange}
            value="none"
          />
          <label className="font-medium ml-3"  htmlFor="pushNone">
            No Push Notification
          </label>
          <br />
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded-sm py-2 px-4 mt-4">
          Save
        </button>
      </form>
    </div>
    </>
  );
}

export default App;
