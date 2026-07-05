import { supabase } from "@/lib/supabase";
import { bisCommittee } from "@/data/bisCommittee";

export async function registerTeam(
  category: string,
  formData: any
) {

  /* =====================================
      UPLOAD PROJECT PROPOSAL
  ===================================== */

  let proposalPdfUrl = "";
  let proposalPdfName = "";

  if (formData.proposalPdf) {

    proposalPdfName =
      `${Date.now()}_${formData.proposalPdf.name}`;

    const { error: uploadError } =
      await supabase.storage
        .from("project-proposals")
        .upload(
          proposalPdfName,
          formData.proposalPdf
        );

    if (uploadError) {

      console.error(
        "UPLOAD ERROR:",
        uploadError
      );

      throw new Error(
        uploadError.message
      );

    }

    const {
      data: publicUrlData,
    } = supabase.storage
      .from("project-proposals")
      .getPublicUrl(
        proposalPdfName
      );

    proposalPdfUrl =
      publicUrlData.publicUrl;

  }

  /* =====================================
      PREPARE VERIFICATION DATA
  ===================================== */

  let verification = null;

  if (
    category ===
    "school-level"
  ) {

    verification = {
      teacherName:
        formData.teacherName,

      teacherEmail:
        formData.teacherEmail,

      teacherContact:
        formData.teacherContact,
    };

  }

  if (
    category ===
    "rebrand"
  ) {

    verification = {
      cpmOne:
        formData.cpmOne,

      cpmTwo:
        formData.cpmTwo,

      cpmThree:
        formData.cpmThree,
    };

  }

  /* =====================================
      SAVE REGISTRATION
  ===================================== */

  const registration = {

    category,

    team_name:
      formData.teamName,

    institution:
      formData.institution,

    leader_name:
      formData.leaderName,

    leader_email:
      formData.leaderEmail,

    leader_contact:
      formData.leaderContact,

    members:
      formData.members,

    verification,

    project_title:
      formData.projectTitle,

    technology_stack:
      formData.technologyStack,

    github_link:
      formData.githubLink || null,

    proposal_pdf_url:
      proposalPdfUrl || null,

    proposal_pdf_name:
      proposalPdfName || null,

    status:
      "Pending",

  };

  console.log(
    "Submitting Registration:",
    registration
  );

  const { error } =
    await supabase
      .from("registrations")
      .insert(registration);

  if (error) {

    console.error(
      "DATABASE ERROR"
    );

    console.error(
      "Code:",
      error.code
    );

    console.error(
      "Message:",
      error.message
    );

    console.error(
      "Details:",
      error.details
    );

    console.error(
      "Hint:",
      error.hint
    );

    throw new Error(
      error.message
    );

  }

  return true;

}