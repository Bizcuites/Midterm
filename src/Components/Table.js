import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState, useEffect } from "react";

export const Table = ({ total }) => {
  const [sortTotal, setSortTotal] = useState([]);
  const onSortClickCase = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return b.total_case - a.total_case;
    });
    setSortTotal(res);
  };

  const onRestoreClickCase = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return a.total_case - b.total_case;
    });
    setSortTotal(res);
  };
  const onSortClickDeath = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return b.total_death - a.total_death;
    });
    setSortTotal(res);
  };

  const onRestoreClickDeath = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return a.total_death - b.total_death;
    });
    setSortTotal(res);
  };
  const onSortClickExcludeabroad = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return b.total_case_excludeabroad - a.total_case_excludeabroad;
    });
    setSortTotal(res);
  };

  const onRestoreClickExcludeabroad = () => {
    const temTotal = [...total];
    const res = temTotal.sort((a, b) => {
      return a.total_case_excludeabroad - b.total_case_excludeabroad;
    });
    setSortTotal(res);
  };

  // console.log(total);
  useEffect(() => {
    setSortTotal(total);
  }, []);

  return (
    <div>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col">Province</th>
            <th scope="col">
              Total Cases{" "}
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onSortClickCase}
              >
                Hight
              </button>
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onRestoreClickCase}
              >
                Low
              </button>
            </th>
            <th scope="col">
              Total Death{" "}
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onSortClickDeath}
              >
                Hight
              </button>
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onRestoreClickDeath}
              >
                Low
              </button>
            </th>
            <th scope="col">
              Total Excludeabroad{" "}
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onSortClickExcludeabroad}
              >
                Hight
              </button>
              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={onRestoreClickExcludeabroad}
              >
                Low
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortTotal.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.province}</td>
                <td>{item.total_case}</td>
                <td>{item.total_death}</td>
                <td>{item.total_case_excludeabroad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
