import React, { useEffect, useState } from "react";
import employeeList from "./Data/getEmployeeList.json";
import workOrderList from "./Data/getWorkOrderList.json";
import "../CSS/assigned.css";

function Assigned() {
  const [allDate, setAllDate] = useState([]);
  const [newWorkList, setNewWorkList] = useState([]);
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    let dates = [];
    let temp = [];
    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get all dates
    workOrderList.job.forEach((val, i) => {
      val.workorders.forEach((v) => {
        let d = `${new Date(v.Date).getDate()}-${
          monthName[new Date(v.Date).getMonth()]
        }-${new Date(v.Date).getFullYear()}`;
        dates.push(d);
        temp.push(v.Date);
      });
    });
    dates = [...new Set(dates)];
    temp = [...new Set(temp)];

    dates.sort((a, b) => new Date(a) - new Date(b));
    temp.sort((a, b) => new Date(a) - new Date(b));
    setAllDate(dates);

    // Get all dates end

    // modifing object to create the work assigned table for name and date
    let temp1 = [];
    employeeList.Employess.forEach((v, i) => {
      dates.forEach((val, ind) => {
        if (temp1[i] === undefined) {
          temp1[i] = {};
          temp1[i]["name"] = v.Name;
          let d = {
            date: val,
            name: "",
            jobname: "",
          };
          temp1[i]["workorders"] = [];
          temp1[i]["workorders"].push(d);
        } else {
          temp1[i]["name"] = v.Name;
          let d = {
            date: val,
            name: "",
            jobname: "",
          };
          temp1[i]["workorders"].push(d);
        }
      });
    });

    setEmpList(temp1);

    // modifing object to create the work assigned table for name and date end

    // modifing object to print unassigned data
    let temp3 = [];
    let dateIndx;
    workOrderList.job.forEach((val, i) => {
      temp3[i] = {};
      temp3[i]["jobname"] = val.jobname;
      temp3[i]["workorders"] = [];
      dateIndx = [];
      val.workorders.forEach((v) => {
        if (temp.includes(v.Date)) {
          dateIndx.push(temp.indexOf(v.Date));
          let a = {
            name: v.name,
            Date: v.Date,
          };

          temp3[i]["workorders"].push(a);
        }
      });

      const insert = (index, item, arr) => {
        return arr.splice(index, 0, item);
      };

      temp.forEach((d, di) => {
        if (!dateIndx.includes(di)) {
          let a = { name: "", Date: d };
          insert(di, a, temp3[i]["workorders"]);
        }
      });
    });
    setNewWorkList(temp3);
    // modifing object to print unassigned data end
  }, []);

  const handleDragStart = (e, params) => {
    e.dataTransfer.setData("params", JSON.stringify(params));
  };

  const handleOnDrop = (e, p) => {
    let params = JSON.parse(e.dataTransfer.getData("params"));
    if (e.target.innerHTML !== "") {
      alert("Already work assigned");
      return false;
    }

    if (
      new Date(e.target.dataset.id).toDateString() ===
      new Date(params.item.Date).toDateString()
    ) {
      // Remove data from unassigned list after drag and drop
      let list = newWorkList.map((val) => {
        if (val.jobname === params.jobname) {
          return {
            jobname: val.jobname,
            workorders: val.workorders.map((v, i) => {
              if (v.name === params.item.name) {
                let aa = {
                  name: "",
                  Date: params.item.Date,
                };
                return aa;
              } else {
                return v;
              }
            }),
          };
        } else {
          return {
            jobname: val.jobname,
            workorders: val.workorders,
          };
        }
      });

      setNewWorkList(list);

      // Remove data from unassigned list after drag and drop end

      // Add data in assigned list after drag and drop
      let a = empList.map((val, ind) => {
        if (ind === p.ind) {
          let b = val.workorders.map((v, i) => {
            if (i === p.i) {
              return {
                date: v["date"],
                name: params.item.name,
                jobname: params.jobname,
              };
            } else {
              return v;
            }
          });
          return { name: val.name, workorders: b };
        } else {
          return val;
        }
      });

      setEmpList(a);
    } else {
      alert("Date mismatch");
    }
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const saveData = () => {
    console.log(empList);
  };

  return (
    <div className="assigned">
      <div className="saveButton">
        <button onClick={saveData}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            {allDate.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {empList.map((val, ind) => {
            return (
              <tr key={ind}>
                <td className="empName">{val.name}</td>
                {val.workorders.map((item, i) => {
                  return (
                    <td
                      className="workAssign"
                      key={i}
                      data-id={item.date}
                      onDrop={(e) => handleOnDrop(e, { ind, i })}
                      onDragOver={(e) => handleDragOver(e)}
                    >
                      {item.name !== "" ? (
                        <div className="con1">
                          <div>{item.name}</div>
                          <div>{item.jobname}</div>
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="unassigned">
        <tbody>
          {newWorkList.map((val, ind) => {
            return (
              <tr key={ind}>
                <td className="workTD"></td>
                {val.workorders.map((item, i) => {
                  return item.name !== "" ? (
                    <td className="workTD" key={i}>
                      <div
                        className="con1"
                        draggable
                        onDragStart={(e) =>
                          handleDragStart(e, {
                            item,
                            jobname: val.jobname,
                            ind,
                          })
                        }
                      >
                        <div>{item.name}</div>
                        <div>{val.jobname}</div>
                      </div>
                    </td>
                  ) : (
                    <td key={i} className="unassigned"></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Assigned;
