import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-bootstrap/Modal';
import styles from './portrait.module.scss';

const Portrait = ({ character, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const maxCharacters = 410;

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className={styles.card}>
          <img src={`/images/portraits/${image}`} alt={character} />
          <h3>{character}</h3>

          <p className={`${styles.role} extra-bold`}>
            <FormattedMessage id={`behindCampaign.portraits.${character}.role`} />
          </p>
          <p className={`${styles.description} bio-description-fontsize`}>
            <FormattedMessage
              id={`behindCampaign.portraits.${character}.description`}
              // --- Display part or full bio based on length ---
              children={description => {
                return description.length > maxCharacters ? (
                  <span>
                    {description.slice(0, maxCharacters)}...
                    <span
                      className={`${styles.modalTrigger} extra-bold`}
                      onClick={handleShow}
                      onKeyDown={handleShow}
                      role="button"
                      tabIndex={0}
                    >
                      Read More
                    </span>
                  </span>
                ) : (
                  <span>{description}</span>
                );
              }}
              // -----
            />
          </p>
        </div>
      </div>

      {/* --- BOOTSTRAP MODAL --- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className={styles.modalCard}>
            <img src={`/images/portraits/${image}`} alt={character} />
            <h3>{character}</h3>

            <p className={`${styles.role} extra-bold`}>
              <FormattedMessage id={`behindCampaign.portraits.${character}.role`} />
            </p>
            <p className={`${styles.description} bio-description-fontsize`}>
              <FormattedMessage id={`behindCampaign.portraits.${character}.description`} />
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Portrait;
