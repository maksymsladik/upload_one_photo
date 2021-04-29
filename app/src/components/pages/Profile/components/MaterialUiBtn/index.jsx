import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { useStyles } from "./makeStyles";

const MaterialUiBtn = ({ type, onFunction }) => {
  const classes = useStyles();

  switch (type) {
    case "upload":
      return (
        <Button
          variant="contained"
          color="default"
          component="span"
          className={classes.btn__upload}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      );

    case "remove":
      return (
        <Button
          onClick={onFunction}
          variant="contained"
          color="secondary"
          className={classes.btn__remove}
          startIcon={<DeleteIcon />}
        >
          Remove
        </Button>
      );

    case "save":
      return (
        <Button
          onClick={onFunction}
          variant="contained"
          color="primary"
          size="large"
          className={classes.btn__save}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      );

    default:
      return null;
  }
};

MaterialUiBtn.defaultProps = {
  onFunction: () => console.log(new Error("Function not found :(")),
};

MaterialUiBtn.propTypes = {
  type: PropTypes.string.isRequired,
  onFunction: PropTypes.func,
};

export default MaterialUiBtn;
