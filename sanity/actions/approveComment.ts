import { useDocumentOperation } from "sanity";
import type { DocumentActionComponent, DocumentActionProps } from "sanity";

export const approveCommentAction: DocumentActionComponent = (
  props: DocumentActionProps,
) => {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const doc = props.draft ?? props.published;
  const approved = Boolean((doc as { approved?: boolean } | null)?.approved);

  return {
    label: approved ? "अमंज़ूर करें" : "मंज़ूर करके प्रकाशित करें",
    tone: approved ? "critical" : "positive",
    onHandle: () => {
      patch.execute([{ set: { approved: !approved } }]);
      publish.execute();
      props.onComplete();
    },
  };
};