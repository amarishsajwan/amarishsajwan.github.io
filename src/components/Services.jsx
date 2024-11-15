import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceData } from "../custom/serviceData";

export default function Services() {
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

            <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
                {/* Prenatal Yoga Section */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-red-600">Prenatal Yoga: Supporting Your Pregnancy Journey</h3>
                    <p className="text-gray-700 leading-relaxed">
                        <b>Prenatal yoga</b> is a specialized practice designed to support the physical and emotional well-being of pregnant women. By incorporating gentle, modified poses, breathing exercises, and relaxation techniques, this form of yoga helps improve flexibility, strength, and balance during pregnancy. It’s tailored to accommodate the body’s changes, focusing on areas such as the hips, back, and pelvis. Certified instructors guide expectant mothers through safe movements for each trimester, making it ideal for those seeking <b>prenatal yoga in Dehradun</b> or elsewhere.
                    </p>

                    <h4 className="text-2xl font-semibold text-gray-800 mt-6">Why Prenatal Yoga is Important for Expecting Mothers</h4>
                    <ul className="space-y-2 list-disc mt-4">
                        <li className="ml-5"><p><b>Relieves Pregnancy Discomforts:</b> Helps reduce back pain, swelling, and fatigue common during pregnancy.</p>
                        </li>
                        <li className="ml-5">
                            <p><b> Improves Flexibility & Strength:</b> Strengthens muscles, especially in the hips, back, and pelvis.
                            </p></li>
                        <li className="ml-5">
                            <p> <b>Promotes Relaxation & Reduces Stress:</b> Encourages deep breathing and relaxation, which can lower stress levels and anxiety.</p>
                        </li>
                        <li className="ml-5">
                            <p><b>Prepares for Labor:</b> Breathing techniques and relaxation practices help manage pain and stress during labor.
                            </p></li>
                        <li className="ml-5">
                            <p> <b>Supports Proper Fetal Positioning:</b> Gentle movements encourage optimal fetal positioning for easier delivery.</p>
                        </li>
                        <li className="ml-5">
                            <p> <b>Enhances Postnatal Recovery:</b> Strengthens muscles and enhances flexibility, aiding recovery after childbirth.</p>
                        </li>
                        <li className="ml-5">
                            <p> <b>Improves Circulation:</b>Boosts blood flow, helping to reduce swelling and promote overall health.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Postnatal Section */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-semibold text-yellow-400">Postnatal Yoga: Restoring Your Body After Childbirth</h3>
                    <p className="text-gray-700 leading-relaxed">
                        <b>Postnatal yoga</b> focuses on the recovery phase after childbirth, offering support for both physical and emotional healing. After giving birth, a woman's body undergoes significant changes, and postnatal yoga helps to restore strength, flexibility, and balance. In Dehradun and other locations, <b>postnatal yoga</b>  offers a gentle yet effective way to support the body’s recovery while promoting mental well-being.
                    </p>

                    <h4 className="text-2xl font-semibold text-gray-800 mt-6">Why Postnatal Yoga is Essential for New Mothers</h4>
                    <ul className="space-y-2 pb-2 list-disc ">
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Aids Postpartum Recovery: </b> Strengthens muscles, particularly those affected by childbirth, like the pelvic floor and core.                            </p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Restores Flexibility & Strength: </b> Gently stretches and strengthens muscles to regain mobility and balance.
                            </p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Supports Mental Well-being:</b> Reduces postpartum anxiety, stress, and depression through relaxation techniques.</p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Improves Posture:</b> Helps correct posture changes caused by pregnancy and breastfeeding, reducing back and neck pain.</p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"> <b>Enhances Pelvic Floor Health:</b> Focuses on strengthening the pelvic floor, essential for bladder control and sexual health.
                            </p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"> <b>Boosts Energy Levels:</b> Increases vitality and reduces fatigue, which is common in the postpartum period.

                            </p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Encourages Bonding: </b>Provides a nurturing environment for mothers to connect with their bodies and with other parents.
                            </p>
                        </li>
                        <li className="ml-5">
                            <p className="text-gray-700"><b>Promotes Better Sleep:</b> Relaxation techniques improve sleep quality, often disrupted after childbirth.

                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
