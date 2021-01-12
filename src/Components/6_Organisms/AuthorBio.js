import React from "react";
import { Container, Box, TypeBlock, Trafalgar } from "../";
import { Minion } from "../4_Atoms";

export const AuthorBio = () => (
  <Box bg="gray.3">
    <Container py="2rem">
      <Box py="2rem">
        <Trafalgar>Constantine Tam</Trafalgar>
        <Minion ml="0.2rem" mt="1rem">
          Scientific Advisory Board Member
        </Minion>
      </Box>
      <Box borderTop="solid 1px" borderColor="gray.5" py="2rem">
        <Box maxWidth="1000px">
          <TypeBlock>
            <p>
              <a href="https://www.petermac.org/users/prof-constantine-tam">
                Professor Constantine Tam
              </a>
              &nbsp;is Director of Haematology at the&nbsp;
              <a href="https://www.svphm.org.au/">St Vincent’s Hospital</a>,
              Melbourne, AU, as well as Disease Group Lead for chronic
              lymphocytic leukemia and low-grade lymphoma at the&nbsp;
              <a href="https://www.viccompcancerctr.org/">
                Victorian Comprehensive Cancer Centre
              </a>
              , Melbourne, AU. He is an internationally recognized expert in
              targeted therapies for B-cell malignancies and leads multiple
              clinical trials for the novel BTK inhibitor, BGB-3111, as well as
              the first clinical trial in the world to combine ibrutinib and
              venetoclax.
            </p>
            <p>
              Prof. Tam graduated MBBS (Hons) in 1998, completing his hematology
              training at the{" "}
              <a href="https://www.unimelb.edu.au/">University of Melbourne</a>,
              Melbourne, AU, and a Leukemia Fellowship at{" "}
              <a href="https://www.mdanderson.org/">
                The University of Texas MD Anderson Cancer Center
              </a>
              , Texas, US. He was awarded a research Doctor of Medicine in 2009
              at the University of Melbourne.
            </p>
            <p>
              Prof. Tam has authored 149 papers as well as numerous book
              chapters and receives research funding from the&nbsp;
              <a href="https://www.victoriancanceragency.vic.gov.au/">
                Victorian Cancer Agency
              </a>
              ,&nbsp;Australian Government National Health and Medical Research
              Council (<a href="https://www.nhmrc.gov.au/">NHRMC</a>
              ),&nbsp;
              <a href="https://www.lls.org/">Leukemia and Lymphoma Society</a>,
              American Institute for Cancer Research&nbsp;(
              <a href="https://www.aicr.org/">AICR</a>),&nbsp;
              <a href="https://www.supportstvincents.com.au/ways-to-give/endowment-fund/">
                St Vincent’s Curran Endowment Fund
              </a>
              ,&nbsp;
              <a href="https://cllglobal.org/">
                CLL Global Research Foundation
              </a>
              ,&nbsp;
              <a href="http://viertel.org.au/">
                The Viertel Charitable Foundation
              </a>
              , and the&nbsp;
              <a href="http://www.cassfoundation.org/">CASS Foundation</a>. In
              2013, Prof. Tam was awarded the Herman Clinical Fellowship for
              Translational Cancer Research by the&nbsp;University of Melbourne.
            </p>
            <p>
              <strong>Positions of responsibility/awards:</strong>
            </p>
            <ul>
              <li>
                Herman Fellowship in Translational Cancer Research from the
                University of Melbourne, 2013
              </li>
              <li>
                Teaching Excellence Award from the University of Melbourne, 2010
              </li>
              <li>
                Sylvia and Charles Viertel Foundation Clinical Investigator
                Fellowship, 2009
              </li>
              <li>
                Merit Award from the American Society of Clinical Oncology (
                <a href="https://www.asco.org/">ASCO</a>), 2007 and 2008
              </li>
              <li>
                Travel Award from the American Society of Hematology (
                <a href="http://www.hematology.org/">ASH</a>), 2007
              </li>
              <li>
                Janice Davis Singletary Fellowship for Lymphoma Research from MD
                Anderson Cancer Center, 2007
              </li>
              <li>
                MD Anderson Cancer Center Fellowship in Patient-Oriented
                Research in CLL, 2006
              </li>
              <li>
                Young Investigator Award,&nbsp;
                <a href="https://www.hsanz.org.au/">
                  Haematology Society of Australia and New Zealand
                </a>
                , 2005 and 2006
              </li>
              <li>
                Member of&nbsp;<a href="http://www.hematology.org/">ASH</a>
                ,&nbsp;<a href="https://www.asco.org/">ASCO</a>, the European
                Hematology Association (<a href="https://ehaweb.org/">EHA</a>
                ), and the American Association for Cancer Research (
                <a href="https://www.aacr.org/Pages/Home.aspx">AACR</a>)
              </li>
              <li>
                On the editorial boards of&nbsp;
                <a href="http://www.bloodadvances.org/">
                  <em>Blood Advances</em>
                </a>
                &nbsp;and&nbsp;
                <a href="https://www.tandfonline.com/loi/ilal20">
                  <em>Leukemia &amp; Lymphoma</em>
                </a>
              </li>
            </ul>
          </TypeBlock>
        </Box>
      </Box>
    </Container>
  </Box>
);
