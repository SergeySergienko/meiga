import { useState } from 'react';
import { Modal } from '.';

export const InvokeModalButton = ({
  type = 'primary',
  action,
  entity,
  descriptor,
  disabled,
  submitFn,
  cancelFn,
}) => {
  const [isOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInvoke = () => {
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await submitFn?.();
      setModalOpen(false);
    } catch (error) {
      console.log('error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    cancelFn?.();
    setModalOpen(false);
  };

  return (
    <>
      <button
        id='invoke-modal-button'
        disabled={disabled}
        className={`btn-${type}-small capitalize`}
        onClick={handleInvoke}
      >
        {action}
      </button>
      {isOpen && (
        <Modal
          type={type}
          action={action}
          entity={entity}
          descriptor={descriptor}
          loading={loading}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
