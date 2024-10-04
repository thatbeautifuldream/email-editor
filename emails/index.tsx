import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const ProofOfSkillEmail = ({
  candidateName,
  candidatePhone,
  candidateEmail,
  companyName,
}: {
  candidateName: string;
  candidatePhone: string;
  candidateEmail: string;
  companyName: string;
}) => (
  <Html>
    <Head />
    <Preview>Submit your Proof-of-Skill for Nagarro</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://app.proofofskill.org/assets/pos-light.png`}
            width="auto"
            height="50"
            alt="Proof-of-Skill"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Hello {candidateName}, You&apos;ve been invited to submit your
            proof-of-skill to {companyName} as the next step of the hiring
            process.
          </Text>
          <Button style={button} href="https://skills.cv">
            Get &amp; Submit Proof-of-Skill
          </Button>
          <Text style={note}>
            Note: Please ensure you sign up using the mobile number{" "}
            {candidatePhone} and enter the same email {candidateEmail} you
            shared with the recruiter.
          </Text>
          <Text style={paragraph}>
            You can also submit (and obtain it if you don&apos;t already have
            them) via this link as well.
          </Text>
          <Text style={paragraph}>
            If you have any queries, please reach out to {companyName}.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            PS - This is a no-reply email. In case you need any assistance, you
            can mail{" "}
            <Link style={anchor} href="mailto:support@proofofskill.org">
              support@proofofskill.org
            </Link>
            .
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ProofOfSkillEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#7866FF",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const note = {
  ...paragraph,
  fontSize: "14px",
  fontStyle: "italic",
  marginTop: "16px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
