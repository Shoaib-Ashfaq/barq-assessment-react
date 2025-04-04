import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyDashboard from "./CompanyDashboard";

const getSubdomain = () => {
  const host = window.location.hostname; // e.g., company1.localhost
  const parts = host.split('.');

  if (
    (host.includes('localhost') || host.includes('lvh.me')) &&
    parts.length >= 2
  ) {
    return parts[0];
  }

  if (parts.length > 2) {
    return parts[0];
  }

  return null;
};

const SubdomainRouter = () => {
  const subdomain = getSubdomain();

  return (
    <Routes>
      {subdomain ? (
        // If subdomain exists, show dashboard
        <Route path="*" element={<CompanyDashboard companyId={subdomain} />} />
      ) : (

        <Route path="*" element={<>Subdomain not exist </>} />
      )}
    </Routes>
  );
};

export default SubdomainRouter;
