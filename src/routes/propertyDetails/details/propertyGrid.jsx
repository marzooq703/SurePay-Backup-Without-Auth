import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PropertyDetails from "../details";
import axios from "axios";

class PropertyGrid extends Component {
  state = {
    modalNewEditProperty: false,
    datas: [],
    propertyColumn: [
      {
        Header: "Pin",
        accessor: "pin",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Address",
        accessor: "address",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "City",
        accessor: "city",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "State",
        accessor: "state",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "County",
        accessor: "county",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "",
        Cell: props => {
          return (
            <ButtonGroup className="m-auto">
              <Button
                outline
                color="primary"
                size="sm"
                onClick={() => this.props.viewBtnHandler(props.original)}
              >
                <IntlMessages id="property.viewbtn" />
              </Button>
              <div>
                {this.redirector()}
                <Button
                  outline
                  color="secondary"
                  size="sm"
                  onClick={() => {
                    this.props.editBtnHandler(props.original);
                    this.toggleDirect();
                  }}
                >
                  <IntlMessages id="property.editbtn" />
                </Button>
              </div>
              {/* </Link> */}
            </ButtonGroup>
          );
        }
      }
    ],
    selected: {}
  };
  toggleDirect = () => {
    this.setState({
      modalNewEditProperty: !this.state.modalNewEditProperty
    });
    console.log(this.state.modalNewEditProperty);
    this.redirector();
  };
  redirector = () => {
    if (this.state.modalNewEditProperty == true) {
      return (
        <Redirect
          to={{
            pathname: "/app/propertyDetails/detailsform",
            state: { select: this.props.details }
          }}
        />
      );
    }
  };
  componentDidMount() {
    this.getDataAxios();
  }

  getDataAxios(pageNo = 0, pageSize = 5) {
    let headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2Q5YTkxNjYxMGE1NDJlNmFkODUzMjgiLCJpYXQiOjE1NTgwNzUwNTYsImV4cCI6MTU1ODA3ODY1Nn0.Eul0thXJUjQQ4zXxjq0sTQfXSiDaiuhWxNWjquWbJ-A"
    };
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://139.59.36.120/propertyDataList",
        {
          pageNo: pageNo,
          pageSize: pageSize
        },
        { headers: headers }
      )
      .then(res =>
        res.data.docs.map(data => {
          let datas = [...this.state.datas];
          datas.push(data);
          this.setState({ datas });
          console.log(datas);
        })
      );
  }
  render() {
    return (
      <Row>
        <Colxx xxs="12" className="mb-3">
          <Card className="d-flex flex-row">
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <ReactTable
                  className="w-100"
                  data={this.state.datas}
                  details={this.props.details}
                  columns={this.state.propertyColumn}
                  noDataText={"No Records Found !"}
                  defaultPageSize={5}
                  showPageSizeOptions={true}
                  PaginationComponent={DataTablePagination}
                  manual
                  defaultFilterMethod={(filter, row) => {
                    return row[filter.id]
                      .toLowerCase()
                      .includes(filter.value.toLowerCase());
                  }}
                />
              </div>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

export default PropertyGrid;
