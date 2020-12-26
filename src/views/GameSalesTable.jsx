import React from "react";
import { connect } from "react-redux";

// Components
import NameFilter from "../components/Filters/NameFilter";
import SalesFilter from "../components/Filters/SalesFilter";
import TableHeader from "../components/TableHeader";
import TableCell from "../components/TableCell";

const GameSalesTable = ({ filteredDatabase }) => {
  return (
    <>
      <div className="h-screen items-center justify-center">
        <div className="antialiased font-sans">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div>
                <h2 className="text-2xl font-semibold leading-tight">
                  Game sales
                </h2>
              </div>
              <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <NameFilter />
                  <SalesFilter />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <TableHeader />
                    </thead>
                    <tbody>
                      {filteredDatabase.map((item) => (
                        <tr key={item.dealID}>
                          <TableCell title={item.title} />
                          <TableCell title={`$` + item.salePrice} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredDatabase: state.filteredDatabase,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameSalesTable);
