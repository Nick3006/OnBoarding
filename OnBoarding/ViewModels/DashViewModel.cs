using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using OnBoarding.Models;

namespace CatWhiteboard.ViewModels
{
    public partial class DashViewModel
    {
        public string Reference { get; set; }
        public string User { get; set; }
        //public DateTime DateRequested { get; set; }
        public String DateRequestedString
        { get; set;
        }
        //public DateTime StartDate { get; set; }
        public String StartDateString
        {
            get; set;
        }
        public string Status { get; set; }

        public DashViewModel()
        {
        }

        //public DashViewModel(ClientRecord rec, int shortTextLength)
        //{
        //    ClientRecordId = rec.ClientRecordId;
        //    StatusCode = rec.Status.Code;
        //    DisplayOrder = rec.Status.DisplayOrder;
        //    DisplayName = rec.GivenName + " " + rec.FamilyName;
        //    Nhi = rec.Nhi;
        //    ReferralDateTime = rec.ReferralDateTime;
        //    if (rec.TriageCode != null)
        //    {
        //        TriageCode = rec.TriageCode.Code;
        //        TriageColour = rec.TriageCode.Colour;
        //        IsTriageDone = 1;
        //    }
        //    else
        //    {
        //        TriageCode = "U";
        //        TriageColour = "none";
        //        IsTriageDone = 0;
        //    }
            
        //    ReferralReason = rec.ReferralReason;
        //    ReferralId = rec.ReferralId;
        //    if (rec.Team != null)
        //    {
        //        TeamName = rec.Team.Description;
        //    }
        //    else
        //    {
        //        TeamName = "";
        //    }
        //    DependentChildren = rec.DependentChildren;
        //    if (rec.AssignedClinician != null)
        //    {
        //        if (rec.AssignedClinician.GivenName != null && rec.AssignedClinician.GivenName.Length > 0)
        //        {
        //            AssignedClinicianName = rec.AssignedClinician.GivenName[0] + " " + rec.AssignedClinician.FamilyName;
        //        }
        //        else
        //        {
        //            AssignedClinicianName = rec.AssignedClinician.FamilyName;
        //        }
                
        //    }
        //    else
        //    {
        //        AssignedClinicianName = "";
        //    }
        //    if (rec.AssignedClinician2 != null)
        //    {
        //        if (rec.AssignedClinician2.GivenName != null && rec.AssignedClinician2.GivenName.Length > 0)
        //        {
        //            AssignedClinicianName2 = rec.AssignedClinician2.GivenName[0] + " " + rec.AssignedClinician2.FamilyName;
        //        }
        //        else
        //        {
        //            AssignedClinicianName2 = rec.AssignedClinician2.FamilyName;
        //        }
        //    }
        //    else
        //    {
        //        AssignedClinicianName2 = "";
        //    }
        //    AssignedDateTime = rec.AssignedDateTime;
        //    ManagementPlan = rec.ManagementPlan;
        //    if ( rec.PlanForDay != null){
        //        PlanForDay plan = rec.PlanForDay.OrderByDescending(p => p.CreateDate).FirstOrDefault();
        //        PlanForDay = plan == null ? "" : plan.Text;
        //    }
        //    else
        //    {
        //        PlanForDay = "";
        //    }
        //    htmlNhiPhones = "NHI: " + Nhi + "<br />";
        //    foreach ( Phone ph in rec.Phone)
        //    {
        //        string phType = "";
        //        if (ph.Type == "PH")
        //        {
        //            phType = "phone: ";
        //        }
        //        else
        //        {
        //            phType = "mobile: ";
        //        }
        //        htmlNhiPhones += phType + ph.Number + "<br />";
        //    }
        //    ShortTextLength = shortTextLength;
        //}
    }

}
