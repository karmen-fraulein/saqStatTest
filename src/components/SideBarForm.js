import React from "react";

import "./SideBarForm.css";

function SideBarForm() {
  return (
    <form>
      <div className="form_select">
        <select>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
        </select>
        <select>
          <option>იანვარი</option>
          <option>თებერვალი</option>
          <option>მარტი</option>
          <option>აპრილი</option>
          <option>მაისი</option>
          <option>ივნისი</option>
          <option>ივლისი</option>
          <option>აგვისტო</option>
          <option>სექტემბერი</option>
          <option>ოქტომბერი</option>
          <option>ნოემბერი</option>
          <option>დეკემბერი</option>
        </select>
      </div>
      <div className="select_div">
        <select className="last_select">
          <option>წინა წლის შესაბამის თვესთან შედარებით</option>
          <option>წინა თვესთან შედარებით</option>
        </select>
      </div>
      <div className="select_div">
        <button type="submit">განახლება</button>
      </div>

      <div>
        <p>
          2021 წლის ივლისში ინფლაციის დონემ წინა წლის შესაბამის თვესთან
          შედარებით შეადგინა 11.91%
        </p>
      </div>
    </form>
  );
}

export default SideBarForm;
