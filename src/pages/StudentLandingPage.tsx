import { useState, useEffect } from "react";
import { AppHeader } from "@/components/ui/app-header";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { SubjectTrendChart } from "@/components/charts/subject-trend-chart";
import { AttendanceChart } from "@/components/charts/attendance-chart";
import { BMIChart } from "@/components/charts/bmi-chart";
import { CertificatesList } from "@/components/sections/certificates-list";
import { ScholarshipBenefits } from "@/components/sections/scholarship-benefits";
import { ReportsModal } from "@/components/modals/reports-modal";
import { 
  FileText, 
  TrendingUp, 
  Calendar, 
  Activity, 
  Award, 
  Gift,
  BarChart3,
  Heart
} from "lucide-react";

// Mock student data
const studentData = {
  name: "Rahul Patel",
  class: 7,
  avatar: undefined // Will use initials fallback
};

const StudentLandingPage = () => {
  const [studentClass] = useState(studentData.class);
  const [reportsModalOpen, setReportsModalOpen] = useState(false);
  const [reportType, setReportType] = useState<"academic" | "holistic">("academic");
  
  // Mock API call simulation
  useEffect(() => {
    // TODO: Replace with actual API calls
    console.log("Loading student dashboard data...");
  }, []);

  const handleCardAction = (section: string) => {
    if (section === "report-cards") {
      setReportType("academic");
      setReportsModalOpen(true);
    } else if (section === "holistic-reports") {
      setReportType("holistic");
      setReportsModalOpen(true);
    } else {
      // TODO: Implement navigation to other sections
      console.log(`Navigating to ${section} section`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Academic Report Cards */}
          <DashboardCard
            title="Academic Report Cards"
            description="View your past academic reports and grades"
            icon={<FileText className="w-5 h-5 text-primary" />}
            actionText="View Reports"
            onClick={() => handleCardAction("report-cards")}
          />

          {/* Holistic Reports */}
          <DashboardCard
            title="Holistic Reports"
            description="Comprehensive development and progress reports"
            icon={<BarChart3 className="w-5 h-5 text-info" />}
            actionText="View Holistic Reports"
            onClick={() => handleCardAction("holistic-reports")}
          />

          {/* Subject-wise Trends */}
          <DashboardCard
            title="Subject-wise Trends"
            description={`Performance trends for Class ${studentClass} subjects`}
            icon={<TrendingUp className="w-5 h-5 text-success" />}
            actionText="View Detailed Analysis"
            onClick={() => handleCardAction("subject-trends")}
            variant="chart"
          >
            <SubjectTrendChart studentClass={studentClass} />
          </DashboardCard>

          {/* Attendance Trends */}
          <DashboardCard
            title="Attendance Trends"
            description="Monthly attendance percentage tracking"
            icon={<Calendar className="w-5 h-5 text-warning" />}
            actionText="View Attendance Details"
            onClick={() => handleCardAction("attendance")}
            variant="chart"
          >
            <AttendanceChart />
          </DashboardCard>

          {/* BMI Report */}
          <DashboardCard
            title="BMI Report"
            description="Year-on-year Body Mass Index tracking"
            icon={<Activity className="w-5 h-5 text-secondary" />}
            actionText="View Health Reports"
            onClick={() => handleCardAction("bmi-reports")}
            variant="chart"
          >
            <BMIChart />
          </DashboardCard>

          {/* Certificates */}
          <DashboardCard
            title="Certificates"
            description="Download your academic and achievement certificates"
            icon={<Award className="w-5 h-5 text-warning" />}
            actionText="View All Certificates"
            onClick={() => handleCardAction("certificates")}
            variant="chart"
          >
            <CertificatesList />
          </DashboardCard>

          {/* Scholarship & Benefits - spans 2 columns on larger screens */}
          <div className="md:col-span-2 lg:col-span-3">
            <DashboardCard
              title="Scholarship & Benefits"
              description="Explore available scholarships, schemes, and benefits you're eligible for"
              icon={<Gift className="w-5 h-5 text-success" />}
              actionText="Explore All Benefits"
              onClick={() => handleCardAction("scholarships")}
              variant="chart"
            >
              <ScholarshipBenefits />
            </DashboardCard>
          </div>
        </div>
      </main>

      {/* Reports Modal */}
      <ReportsModal
        isOpen={reportsModalOpen}
        onClose={() => setReportsModalOpen(false)}
        reportType={reportType}
        currentClass={studentClass}
      />
    </div>
  );
};

export default StudentLandingPage;