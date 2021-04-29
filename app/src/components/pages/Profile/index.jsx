import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MaterialUiBtn from "./components/MaterialUiBtn";
import Animation from "./components/Animation";
import { resizeFile } from "../../../lib/resizeFile";
import { fetchPhotoAction, fetchUpdatePhotoAction } from "./redux/asyncAction";
import {
  setNewPhotoAction,
  setInputValueAction,
  setAnimationAction,
  setBtnSubmitAction,
} from "./redux/actionsTypes";

const Profile = (props) => {
  const {
    fetchPhoto,
    fetchUpdatePhoto,
    setNewPhoto,
    setInputValue,
    setAnimation,
    setBtnSubmit,
    old_data_photo,
    new_data_photo,
    inputValue,
    animation,
    btnSubmit,
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchPhoto(), []);

  const onSubmitFile = () => fetchUpdatePhoto(new_data_photo);

  const onChange = (e) => {
    setAnimation(true);
    setInputValue(e.target.value);
    resizeFile(e.target.files[0]).then((res) => {
      setNewPhoto(res);
      if (res !== old_data_photo) setBtnSubmit(true);
      if (res === old_data_photo) setBtnSubmit(false);
      setTimeout(() => setAnimation(false), 1500);
    });
  };

  const onRemove = () => {
    setNewPhoto(null);
    setInputValue("");
    if (old_data_photo !== null) setBtnSubmit(true);
    if (old_data_photo === null) setBtnSubmit(false);
  };

  return (
    <div className="container">
      <div className="block">
        <div className="block__img">
          {!animation ? (
            <img
              src={new_data_photo ? new_data_photo : "/images/no-image.jpg"}
              alt="error"
            />
          ) : (
            <Animation />
          )}
        </div>

        <div className="block__btn">
          <label className={!new_data_photo ? "label__width" : "label"}>
            <input
              onChange={(e) => onChange(e)}
              value={inputValue}
              style={{ display: "none" }}
              type="file"
            />

            <MaterialUiBtn type="upload" />
          </label>

          {new_data_photo && (
            <MaterialUiBtn type="remove" onFunction={onRemove} />
          )}

          {btnSubmit && <MaterialUiBtn type="save" onFunction={onSubmitFile} />}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: () => fetchPhotoAction(dispatch),
    fetchUpdatePhoto: (new_data_photo) =>
      fetchUpdatePhotoAction(dispatch, new_data_photo),
    setNewPhoto: (change_data) => dispatch(setNewPhotoAction(change_data)),
    setInputValue: (value) => dispatch(setInputValueAction(value)),
    setAnimation: (status) => dispatch(setAnimationAction(status)),
    setBtnSubmit: (status) => dispatch(setBtnSubmitAction(status)),
  };
};

const mapStateToProps = (state) => {
  return {
    old_data_photo: state.photo.old_data_photo,
    new_data_photo: state.photo.new_data_photo,
    inputValue: state.photo.inputValue,
    animation: state.photo.animation,
    btnSubmit: state.photo.btnSubmit,
  };
};

Profile.defaultProps = {
  old_data_photo: null,
  new_data_photo: null,
};

Profile.propTypes = {
  fetchPhoto: PropTypes.func.isRequired,
  fetchUpdatePhoto: PropTypes.func.isRequired,
  setNewPhoto: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  setAnimation: PropTypes.func.isRequired,
  setBtnSubmit: PropTypes.func.isRequired,
  old_data_photo: PropTypes.string,
  new_data_photo: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  animation: PropTypes.bool.isRequired,
  btnSubmit: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
