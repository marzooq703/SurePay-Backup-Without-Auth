import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./details/propertyGrid.jsx";
import ViewModal from "./details/viewModal.jsx";
import AddModal from "./details/addModal.jsx";
import EditModal from "./details/editModal.jsx";

import { NotificationManager } from "Components/ReactNotifications";
import mouseTrap from "react-mousetrap";
import { Route, Redirect, Switch } from 'react-router'
import axios from "axios";
import DetailsForm from './detailsForm';


class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalAddProperty: false,
      modalEditProperty: false,
      modalViewProperty: false,
      modalNewEditProperty: false,

      propertyData: [
        {
          name: "John",
          creditor: "Mark",
          amount: "25000",
          paymentAmount: "18000",
          pin: "328202004",
          county: "BOONE",
          street: "215 HANNA ST",
          address: "215 HANNA ST",
          city: "CLAYTON",
          state: "IL",
          zip: 62324,
          township: 1,
          classCode: 40,
          assessedValue: 188568,
          marketValue: 565704,
          taxesPerYear: 17891.58,
          propertyNumber: "0326302355BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription:
            "NE SEC 06 1N5WTRI TR AT INT N SEC LN & E LN RR PT NW NE SEC 6"
        },
        {
          name: "William",
          creditor: "Sheiksphear",
          amount: "26000",
          paymentAmount: "18000",
          pin: "328229029",
          county: "BOONE",
          street: "2292 E 2903RD LN",
          address: "2292 E 2903RD LN",
          city: "CLAYTON",
          state: "IL",
          zip: 62324,
          township: 1,
          classCode: 41,
          assessedValue: 145628,
          marketValue: 452347,
          taxesPerYear: 17891.58,
          propertyNumber: "0326306351BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "NW SEC 11 1N5WW 710FT NE NW SEC 11"
        },
        {
          name: "David",
          creditor: "Bill",
          amount: "35000",
          paymentAmount: "19000",
          pin: "422300023",
          county: "BOONE",
          street: "315 E MAIN ST",
          address: "315 E MAIN ST",
          city: "CLAYTON",
          state: "IL",
          zip: 62324,
          township: 2,
          classCode: 40,
          assessedValue: 118608,
          marketValue: 642734,
          taxesPerYear: 17891.58,
          propertyNumber: "0326304563BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 46ORIGINAL SURVEY LOT 46"
        },
        {
          name: "Javed",
          creditor: "Mark",
          amount: "25000",
          paymentAmount: "18000",
          pin: "526478049",
          county: "ADAMS",
          street: "308 E MORGAN ST",
          address: "308 E MORGAN ST",
          city: "GOLDEN",
          state: "IL",
          zip: 62324,
          township: 3,
          classCode: 21,
          assessedValue: 143256,
          marketValue: 234164,
          taxesPerYear: 11911.5,
          propertyNumber: "0526401266BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 47ORIGINAL SURVEY E 44FT LOT 47"
        },
        {
          name: "John",
          creditor: "Mark",
          amount: "29000",
          paymentAmount: "18000",
          pin: "535182029",
          county: "ADAMS",
          street: "211 S MONROE ST",
          address: "211 S MONROE ST",
          city: "GOLDEN",
          state: "IL",
          zip: 62324,
          township: 7,
          classCode: 11,
          assessedValue: 162522,
          marketValue: 402347,
          taxesPerYear: 27101.58,
          propertyNumber: "0526479863BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 48ORIGINAL SURVEY W 15FT LOT 47 & ALL 48"
        },
        {
          name: "John",
          creditor: "Mark",
          amount: "25000",
          paymentAmount: "18000",
          pin: "536151026",
          county: "ADAMS",
          street: "112 N AUGUSTA RD",
          address: "112 N AUGUSTA RD",
          city: "GOLDEN",
          state: "IL",
          zip: 62324,
          township: 8,
          classCode: 21,
          assessedValue: 128568,
          marketValue: 452347,
          taxesPerYear: 19482.35,
          propertyNumber: "0526477521BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 137ORIGINAL SURVEY LOT 137"
        },
        {
          name: "John",
          creditor: "Mark",
          amount: "25000",
          paymentAmount: "18000",
          pin: "535183006",
          county: "BOONE",
          street: "211 S MONROE ST",
          address: "211 S MONROE ST",
          city: "GOLDEN",
          state: "IL",
          zip: 62324,
          township: 7,
          classCode: 11,
          assessedValue: 182582,
          marketValue: 482387,
          taxesPerYear: 28101.58,
          propertyNumber: "0321278030BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 48ORIGINAL SURVEY W 15FT LOT 47 & ALL 48"
        },
        {
          name: "John",
          creditor: "Mark",
          amount: "25000",
          paymentAmount: "18000",
          pin: "536153028",
          county: "ADAMS",
          street: "112 N AUGUSTA RD",
          address: "112 N AUGUSTA RD",
          city: "GOLDEN",
          state: "IL",
          zip: 62324,
          township: 3,
          classCode: 21,
          assessedValue: 156568,
          marketValue: 450327,
          taxesPerYear: 19632.35,
          propertyNumber: "0302178049BOONE",
          preeqexm: 0,
          homeOwner: 6000,
          seniorExemption: 0,
          seniorFreeze: 0,
          totalAcres: 1,
          legalDescription: "LOT 137ORIGINAL SURVEY LOT 137"
        }
      ],
      datas: [],

      selectedProperty: {}
    };
  }



  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.propertyDetails" />
                </h1>

                <div className="float-sm-right">
                  <Button
                    color="success"
                    size="lg"
                    className="default"
                    onClick={this.toggleAddProperty}
                  >
                    <IntlMessages id="property.add-modal-title" />
                  </Button>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <PropertyGrid
            data={this.state.datas}
            viewBtnHandler={this.viewBtnControl}
            editBtnHandler={this.editBtnControl}
            details={this.state.selectedProperty}
          />
        </div>

        <AddModal
          modalAddHandler={this.state.modalAddProperty}
          toggleModalAdd={this.toggleAddProperty}
          onSubmit={this.handleSubmit}
        />

        <ViewModal
          modalViewHandler={this.state.modalViewProperty}
          toggleModalView={this.toggleViewProperty}
          details={this.state.selectedProperty}
        />


        <EditModal
          modalEditHandler={this.state.modalEditProperty}
          toggleModalEdit={this.toggleEditProperty}
          onSubmit={this.handleEditSubmit}
          details={this.state.selectedProperty}
        />
        <div>hello{this.state.city}</div>
      </Fragment>
    );
  }



  //PropertyDetails  


  handleSubmit = values => {
    const propertyData = [...this.state.propertyData];
    const payload = { ...values };

    propertyData.push(payload);
    this.toggleAddProperty();
    this.setState({ propertyData });
    NotificationManager.success(
      "",
      "New Property Added",
      3000,
      null,
      null,
      "primary filled"
    );
  };

  handleEditSubmit = values => {
    event.preventDefault();
    const updatedProperty = { ...values };
    const propertyData = [...this.state.propertyData];
    const index = propertyData.findIndex(p => {
      return p.pin == this.state.selectedProperty.pin;
    });
    propertyData[index] = { ...updatedProperty };
    this.toggleEditProperty();
    this.setState({ propertyData });
    NotificationManager.info(
      "",
      "Changes Successfully Updated",
      3000,
      null,
      null,
      "info filled"
    );
  };

  toggleAddProperty = () => {
    this.setState({
      modalAddProperty: !this.state.modalAddProperty
    });
  };

  toggleViewProperty = () => {
    this.setState({
      modalViewProperty: !this.state.modalViewProperty
    });
  };

  toggleEditProperty = () => {
    this.setState({
      modalEditProperty: !this.state.modalEditProperty
    });
  };



  viewBtnControl = property => {
    const selectedProperty = { ...property };
    this.setState({ selectedProperty });
    console.log(this.state.selectedProperty);
    this.toggleViewProperty();
  };

  editBtnControl = property => {
    const selectedProperty = { ...property };
    this.setState({ selectedProperty });
    console.log(this.state.selectedProperty);
    // this.toggleEditProperty();
  };
}

export default injectIntl(mouseTrap(PropertyDetails));
