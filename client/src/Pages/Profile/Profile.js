import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {GET_SAVE_CONVERGE, 
    GET_SAVE_HIGHGRADE, 
    GET_SAVE_REALGRADE, 
    GET_SAVE_MASTERGRADE, 
    GET_SAVE_PERFECTGRADE, 
    GET_SAVE_SDGRADE, 
    GET_SAVE_OTHER,
    GET_SAVE_ENSEMBLE,
    GET_SAVE_GFRAME,
    GET_CONVERGE_WISH, 
    GET_HIGHGRADE_WISH, 
    GET_REALGRADE_WISH, 
    GET_MASTERGRADE_WISH, 
    GET_PERFECTGRADE_WISH,
    GET_SDGRADE_WISH,
    GET_OTHER_WISH,
    GET_ENSEMBLE_WISH,
    GET_GFRAME_WISH
} from '../../utils/queries'
import {Accordion} from 'react-bootstrap'
import {ConvergeTable, HighGradeTable, RealGradeTable, MasterGradeTable, PerfectGradeTable, SDGradeTable, RealGradeWishlistTable, OtherTable, EnsembleTable, GFrameTable} from '../../Components'
import {ConvergeWishlistTable, HighGradeWishlistTable,  MasterGradeWishlistTable, PerfectGradeWishlistTable, SDGradeWishlistTable, OtherWishlistTable, EnsembleWishlistTable, GFrameWishlistTable} from '../../Components'
import './styles.css'

const Profile = () => {
    const {loading, data} = useQuery(GET_SAVE_CONVERGE)
    const {loading: loadHigh, data: highData} = useQuery(GET_SAVE_HIGHGRADE)
    const {loading: loadReal, data: realData} = useQuery(GET_SAVE_REALGRADE)
    const {loading: loadMaster, data: masterData} = useQuery(GET_SAVE_MASTERGRADE)
    const {loading: loadPerfect, data: perfectData} = useQuery(GET_SAVE_PERFECTGRADE)
    const {loading: loadSD, data: sdData} = useQuery(GET_SAVE_SDGRADE)
    const {loading: loadOther, data: otherData} = useQuery(GET_SAVE_OTHER)
    const {loading: loadEnsembleGrade, data: ensembleData} = useQuery(GET_SAVE_ENSEMBLE)
    const {loading: loadGFrameGrade, data: GFrameData} = useQuery(GET_SAVE_GFRAME)
    const {loading: loadConvergeWish, data: convergeWishData} = useQuery(GET_CONVERGE_WISH)
    const {loading: loadHighWish, data: highWishData} = useQuery(GET_HIGHGRADE_WISH)
    const {loading: loadRealWish, data: realWishData} = useQuery(GET_REALGRADE_WISH)
    const {loading: loadMasterWish, data: masterWishData} = useQuery(GET_MASTERGRADE_WISH)
    const {loading: loadPerfectGradeWish, data: perfectGradeWishData} = useQuery(GET_PERFECTGRADE_WISH)
    const {loading: loadSDWish, data: SDWishData} = useQuery(GET_SDGRADE_WISH)
    const {loading: loadOtherWish, data: otherWishData} = useQuery(GET_OTHER_WISH)
    const {loading: loadEnsembleWish, data: ensembleWishData} = useQuery(GET_ENSEMBLE_WISH)
    const {loading: loadGFrameWish, data: GFrameWishData} = useQuery(GET_GFRAME_WISH)
    const [loadConverge, setLoadConverge] = useState(undefined)
    const [loadHighGrade, setLoadHighGrade] = useState(undefined)
    const [loadRealGrade, setLoadRealGrade] = useState(undefined)
    const [loadMasterGrade, setLoadMasterGrade] = useState(undefined)
    const [loadPerfectGrade, setLoadPerfectGrade] = useState(undefined)
    const [loadSDGrade, setLoadSDGrade] = useState(undefined)
    const [loadOtherGrade, setLoadOtherGrade] = useState(undefined)
    const [loadEnsemble, setLoadEnsemble] = useState(undefined)
    const [loadGFrame, setLoadGFrame] = useState(undefined)
    const [loadConvergeList, setLoadConvergeList] = useState(undefined)
    const [loadHighList, setLoadHighList] = useState(undefined)
    const [loadRealList, setLoadRealList] = useState(undefined)
    const [loadMasterList, setLoadMasterList] = useState(undefined)
    const [loadPerfectGradeList, setLoadPerfectGradeList] = useState(undefined)
    const [loadSDList, setLoadSDList] = useState(undefined)
    const [loadOtherList, setLoadOtherList] = useState(undefined)
    const [loadEnsembleList, setLoadEnsembleList] = useState(undefined)
    const [loadGFrameList, setLoadGFrameList] = useState(undefined)

    useEffect(() => {
        if(!loading && data) {
            setLoadConverge(data.getUserConverge.gotConverges)
        }
    }, [loading, data])

    useEffect(() => {
        if(!loadHigh && highData) {
            setLoadHighGrade(highData.getUserHighGrade.gotHighGrades)
        }
    }, [loadHigh, highData])

    useEffect(() => {
        if(!loadReal && realData) {
            setLoadRealGrade(realData.getUserRealGrade.gotRealGrades)
        }
    }, [loadReal, realData])

    useEffect(() => {
        if(!loadMaster && masterData) {
            setLoadMasterGrade(masterData.getUserMasterGrade.gotMasterGrades)
        }
    }, [loadMaster, masterData])

    useEffect(() => {
        if(!loadPerfect && perfectData) {
            setLoadPerfectGrade(perfectData.getUserPerfectGrade.gotPerfectGrades)
        }
    }, [loadPerfect, perfectData])

    useEffect(() => {
        if(!loadSDGrade && sdData) {
            setLoadSDGrade(sdData.getUserSDGrade.gotSDGrades)
        }
    }, [loadSD, sdData])

    useEffect(() => {
        if(!loadOther && otherData) {
            setLoadOtherGrade(otherData.getUserOther.gotRE100s)
        }
    }, [loadOther, otherData])

    useEffect(() => {
        if(!loadEnsembleGrade && ensembleData) {
            setLoadEnsemble(ensembleData.getUserEnsemble.gotEnsemble)
        }
    }, [loadEnsembleGrade, ensembleData])

    useEffect(() => {
        if(!loadGFrameGrade && GFrameData) {
            setLoadGFrame(GFrameData.getUserGFrame.gotGFrame)
        }
    }, [loadGFrameGrade, GFrameData])

    useEffect(() => {
        if(!loadConvergeList && convergeWishData) {
            setLoadConvergeList(convergeWishData.getUserConvergeWishlist.convergeWish)
        }
    }, [loadConvergeWish, convergeWishData])

    useEffect(() => {
        if(!loadHighList && highWishData) {
            setLoadHighList(highWishData.getUserHighWishlist.highGradeWish)
        }
    }, [loadHighWish, highWishData])

   useEffect(() => {
       if(!loadRealList && realWishData) {
           setLoadRealList(realWishData.getUserRealWishlist.realGradeWish)
       }
   }, [loadRealWish, realWishData])

    useEffect(() => {
        if(!loadMasterList && masterWishData) {
            setLoadMasterList(masterWishData.getUserMasterWishlist.masterGradeWish)
        }
    }, [loadMasterList, masterWishData])

    useEffect(() => {
        if(!loadPerfectGradeList && perfectGradeWishData) {
            setLoadPerfectGradeList(perfectGradeWishData.getUserPerfectWishlist.perfectGradeWish)
        }
    }, [loadPerfectGradeList, perfectGradeWishData])

    useEffect(() => {
        if(!loadSDList && SDWishData) {
            setLoadSDList(SDWishData.getUserSDWishlist.sdGradeWish)
        }
    }, [loadSDList, SDWishData])

    useEffect(() => {
        if(!loadOtherList && otherWishData) {
            setLoadOtherList(otherWishData.getUserOtherWishlist.re100Wish)
        }
    }, [loadOtherList, otherWishData])

    useEffect(() => {
        if(!loadEnsembleList && ensembleWishData) {
            setLoadEnsembleList(ensembleWishData.getUserEnsembleWishlist.ensembleWish)
        }
    }, [loadEnsembleWish, ensembleWishData])

    useEffect(() => {
        if(!loadGFrameList && GFrameWishData) {
            setLoadGFrameList(GFrameWishData.getUserGFrameWishlist.gFrameWish)
        }
    }, [loadGFrameWish, GFrameWishData])

    return (
        <>  
            <h3 className="mainTitle">Owned</h3>
            <Accordion className="owned">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Saved Converges</Accordion.Header>
                    <Accordion.Body>
                        {loadConverge && !loading && <ConvergeTable converges={loadConverge}/>}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Saved High Grades</Accordion.Header>
                    <Accordion.Body>
                        {loadHighGrade && !loadHigh && <HighGradeTable highGrades={loadHighGrade} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Saved Real Grades</Accordion.Header>
                    <Accordion.Body>
                        {loadRealGrade && !loadReal && <RealGradeTable realGrades={loadRealGrade} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Saved RE/100</Accordion.Header>
                    <Accordion.Body>
                        {loadOtherGrade && !loadOther && <OtherTable others={loadOtherGrade} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Saved Master Grades</Accordion.Header>
                    <Accordion.Body>
                        {loadMasterGrade && !loadMaster && <MasterGradeTable masterGrades={loadMasterGrade} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Saved Perfect Grades</Accordion.Header>
                    <Accordion.Body>
                        {loadPerfectGrade && !loadPerfect && <PerfectGradeTable perfectGrades={loadPerfectGrade} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Saved SD</Accordion.Header>
                    <Accordion.Body>
                        {loadSDGrade && !loadSD && <SDGradeTable sdGrades={loadSDGrade}/>}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Saved Ensemble</Accordion.Header>
                    <Accordion.Body>
                        {loadEnsemble && !loadEnsembleGrade && <EnsembleTable ensembles={loadEnsemble}/>}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Saved G-Frame</Accordion.Header>
                    <Accordion.Body>
                        {loadGFrame && !loadGFrameGrade && <GFrameTable GFrames={loadEnsemble}/>}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br/>

            <h3 className="mainTitle">Wishlist</h3>
            <Accordion className="wishlist">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Converge Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadConvergeList && !loadConvergeWish && <ConvergeWishlistTable converges={loadConvergeList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>High Grade Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadHighList && !loadHighWish && <HighGradeWishlistTable highGrades={loadHighList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Real Grades Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadRealList && !loadRealWish && <RealGradeWishlistTable realGrades={loadRealList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>RE/100 Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadOtherList && !loadOtherWish && <OtherWishlistTable others={loadOtherList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Master Grades Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadMasterList && !loadMasterWish && <MasterGradeWishlistTable masterGrades={loadMasterList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Perfect Grade Wishlist</Accordion.Header>
                    <Accordion.Body>
                        {loadPerfectGradeList && !loadPerfectGradeWish && <PerfectGradeWishlistTable perfectGrades={loadPerfectGradeList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>SD Wishlist</Accordion.Header>
                    <Accordion.Body>
                       {loadSDList && !loadSDWish && <SDGradeWishlistTable SDGrades={loadSDList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Ensemble Wishlist</Accordion.Header>
                    <Accordion.Body>
                       {loadEnsembleList && !loadEnsembleWish && <EnsembleWishlistTable ensembles={loadEnsembleList} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>G-Frame Wishlist</Accordion.Header>
                    <Accordion.Body>
                       {loadGFrameList && !loadGFrameWish && <GFrameWishlistTable GFrames={loadGFrame} />}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Profile
